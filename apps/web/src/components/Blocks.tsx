import { groq } from "next-sanity";
import { Banner, bannerQuery } from "ui";
import { Missing } from "./Missing";
import { SanityContentPortal } from "./SanityContentPortal";

const types: {
  [key: string]: React.FC<any>;
} = {
  banner: Banner,
};

export const blocksQuery = groq`
  _type,
  ${bannerQuery}
`;

type BlocksProps = {
  blocks: any[];
  preview?: boolean;
  constraintsRef?: React.RefObject<HTMLElement>;
};

export const Blocks = ({
  blocks,
  preview = false,
  constraintsRef,
}: BlocksProps) => {
  if (blocks.length === 0) return null;
  return blocks?.map((block) => {
    if (types[block?._type]) {
      const Component = types[block._type];
      return (
        <SanityContentPortal
          key={block._id || (Math.random() * 9999) << 0}
          documentType={block._type}
          documentId={block._id}
          enabled={preview}
          constraintsRef={constraintsRef}
        >
          <Component {...block} />
        </SanityContentPortal>
      );
    }
    return (
      <Missing key={block._id || (Math.random() * 9999) << 0} {...block} />
    );
  });
};
