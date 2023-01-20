import { HomePageProps } from "../pages";
import { motion } from "framer-motion";
import { SanityContentPortal } from "./SanityContentPortal";
import { Banner } from "ui";
import { useRef } from "react";
import { groq } from "next-sanity";
import { Blocks, blocksQuery } from "./Blocks";

export const homePageQuery = groq`
  *[_type == "pages.home"][0] {
    blocks[] -> {
      ${blocksQuery}
    }
  }
`;

type Props = HomePageProps;

export const HomePage = (props: Props) => {
  const blocks = props?.blocks;
  const preview = props?.preview;
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div className="h-full" ref={constraintsRef}>
      <Blocks
        blocks={blocks}
        preview={preview}
        constraintsRef={constraintsRef}
      />
    </motion.div>
  );
};
