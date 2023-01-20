import { GetServerSideProps } from "next";
import { BannerProps } from "ui";
import { getClient } from "../sanity/server";
import { HomePage, homePageQuery } from "../components/HomePage";
import { PreviewSuspense } from "next-sanity/preview";
import { PreviewHomePage } from "../components/PreviewHomePage";

type PageMode = "editor" | "default";

export type HomePageProps = {
  preview: boolean;
  blocks: BannerProps[];
};

export default function Home(props: HomePageProps) {
  const blocks = props?.blocks;
  const preview = props?.preview;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={<HomePage blocks={blocks} preview={preview} />}
      >
        <PreviewHomePage preview={preview} />
      </PreviewSuspense>
    );
  }

  return <HomePage blocks={blocks} preview={preview} />;
}

export const getServerSideProps: GetServerSideProps = async ({
  preview = false,
}) => {
  const page = await getClient(preview).fetch(homePageQuery);
  return {
    props: {
      preview,
      ...page,
    },
  };
};
