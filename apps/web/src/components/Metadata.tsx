import Head from "next/head";

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
};

const DEFAULT_TITLE = "Sanity Widgets";
const DEFAULT_DESCRIPTION = "Expermental idea.";

export const Metadata = ({ title, description, image }: MetadataProps) => {
  const titleWithDefault = title
    ? `${title} | ${DEFAULT_TITLE}`
    : DEFAULT_TITLE;
  const descriptionWithDefault = description
    ? description
    : DEFAULT_DESCRIPTION;
  return (
    <Head>
      <title>{titleWithDefault}</title>
      <meta name="description" content={descriptionWithDefault} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://sanity-widgets-web.vercel.app/"
      />
      <meta property="og:title" content={titleWithDefault} />
      <meta property="og:description" content={descriptionWithDefault} />
      {/* <meta property="og:image" content={image} /> */}
      {/* <meta property="twitter:card" content="summary_large_image" /> */}
      <meta
        property="twitter:url"
        content="https://sanity-widgets-web.vercel.app/"
      />
      <meta property="twitter:title" content={titleWithDefault} />
      <meta property="twitter:description" content={descriptionWithDefault} />
      {/* <meta property="twitter:image" content={image} /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
