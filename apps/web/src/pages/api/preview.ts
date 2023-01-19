import type { NextApiRequest, NextApiResponse } from "next";
import type { PageConfig } from "next/types";
import { createClient, groq } from "next-sanity";
import { getSecret, previewSecretId } from "preview";
import { config as sanityConfig } from "../../sanity/config";

// res.setPreviewData only exists in the nodejs runtime, setting the config here allows changing the global runtime
// option in next.config.mjs without breaking preview mode
export const config: PageConfig = { runtime: "nodejs" };

function redirectToPreview(
  res: NextApiResponse<string | void>,
  previewData: { token?: string },
  location: string
): void {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData(previewData);
  // Redirect to a preview capable route
  res.writeHead(307, { location });
  res.end();
}

const _client = createClient({
  ...sanityConfig,
  useCdn: process.env.SANITY_REVALIDATE_SECRET
    ? false
    : process.env.NODE_ENV === "production",
});

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  const previewData: { token?: string } = {};
  // If you want to require preview mode sessions to be started from the Studio, set the SANITY_REQUIRE_PREVIEW_SECRET
  // environment variable to 'true'. The benefit of doing this that unauthorized users attempting to brute force into your
  // preview mode won't make it past the secret check, and only legitimate users are able to bypass the statically generated pages and load up
  // the serverless-powered preview mode.
  if (
    process.env.SANITY_REQUIRE_PREVIEW_SECRET === "true" &&
    !req.query.secret
  ) {
    return res.status(401).send("Invalid secret");
  }

  // If a secret is present in the URL, verify it and if valid we upgrade to token based preview mode, which works in Safari and Incognito mode
  if (req.query.secret) {
    const token = process.env.SANITY_API_READ_TOKEN;
    if (!token) {
      throw new Error(
        "A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup."
      );
    }
    const client = _client.withConfig({ useCdn: false, token });
    const secret = await getSecret(client, previewSecretId);
    if (req.query.secret !== secret) {
      return res.status(401).send("Invalid secret");
    }
    previewData.token = token;
  }

  // If no slug is provided open preview mode on the frontpage
  if (!req.query.slug) {
    return redirectToPreview(res, previewData, "/");
  }

  // Check if the post with the given `slug` exists
  const client = _client.withConfig({
    // Fallback to using the WRITE token until https://www.sanity.io/docs/vercel-integration starts shipping a READ token.
    // As this client only exists on the server and the token is never shared with the browser, we don't risk escalating permissions to untrustworthy users
    token:
      process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
  });

  const type = req.query.type as string;
  const params = {
    type,
  };

  const query = groq`
    *[_type == $type][0] {
      ...,
    }
  `;

  const page = await client.fetch(query, params);

  if (!page) {
    return res.status(404).send("Document Not Found");
  }

  return redirectToPreview(res, previewData, "/");
}
