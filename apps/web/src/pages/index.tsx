import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Banner, Button, BannerProps } from "ui";
import { SanityContentPortal } from "../components/SanityContentPortal";
import { bannerQuery } from "../sanity/queries/blocks/banner";
import { getClient } from "../sanity/server";

type HomePageProps = {
  preview: boolean;
  mode: "editor" | "default";
  blocks: BannerProps[];
};

export default function Home(props: HomePageProps) {
  const blocks = props?.blocks;
  const mode = props?.mode;
  return (
    <>
      <Head>
        <title>Web - Sanity Widgets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-6">
        {blocks?.map((block) => {
          if (block._type === "banner") {
            return (
              <SanityContentPortal
                documentType={block._type}
                documentId={block._id}
                enabled={mode === "editor"}
              >
                <Banner {...block} />
              </SanityContentPortal>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const banner = await getClient(preview).fetch(bannerQuery);
  const mode = "editor";
  return {
    props: {
      preview,
      mode,
      blocks: [banner],
    },
  };
};
