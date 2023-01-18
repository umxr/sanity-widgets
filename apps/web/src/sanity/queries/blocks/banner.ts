import { groq } from "next-sanity";

export const bannerQuery = groq`
  *[_type == "banner"][0] {
    _id,
    _type,
    title,
    subtitle,
    description,
    "image": image.asset->url,
  }
`;
