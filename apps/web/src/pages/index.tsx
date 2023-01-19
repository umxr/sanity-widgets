import { q } from "groqd";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRef } from "react";
import { Banner, Button, BannerProps } from "ui";
import { SanityContentPortal } from "../components/SanityContentPortal";
import { bannerQuery } from "../sanity/queries/blocks/banner";
import { getClient } from "../sanity/server";
import { motion } from "framer-motion";
import { PreviewBanner } from "../components/PreviewBanner";

type PageMode = "editor" | "default";

type HomePageProps = {
  preview: boolean;
  blocks: BannerProps[];
};

export default function Home(props: HomePageProps) {
  const blocks = props?.blocks;
  const preview = props?.preview;
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Web - Sanity Widgets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div className="h-full" ref={constraintsRef}>
        <PreviewBanner enabled={preview} />
        <div>
          {blocks?.map((block) => {
            if (block._type === "banner") {
              return (
                <SanityContentPortal
                  key={block._id}
                  documentType={block._type}
                  documentId={block._id}
                  enabled={preview}
                  constraintsRef={constraintsRef}
                >
                  <Banner {...block} />
                </SanityContentPortal>
              );
            }
            return null;
          })}
        </div>
      </motion.div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const { query, schema } = q("*")
    .filter("_type == 'banner'")
    .grab({
      _id: q.string(),
      _type: q.string(),
      title: q.string(),
      subtitle: q.string(),
      description: q.string(),
      image: ["image.asset->url", q.string()],
    })
    .slice(0);

  const banner = schema.parse(await getClient(preview).fetch(query));
  return {
    props: {
      preview,
      blocks: [banner],
    },
  };
};
