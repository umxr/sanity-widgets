import { HomePageProps } from "../pages";
import { usePreview } from "../sanity/server";
import { HomePage, homePageQuery } from "./HomePage";

type Props = Pick<HomePageProps, "preview">;

export const PreviewHomePage = ({ preview }: Props) => {
  const data = usePreview(null, homePageQuery);
  const blocks = data?.blocks;
  return <HomePage preview={preview} blocks={blocks} />;
};
