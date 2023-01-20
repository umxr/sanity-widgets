import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

import type { AppProps } from "next/app";
import { PreviewBanner } from "../components/PreviewBanner";
import { Metadata } from "../components/Metadata";

export default function MyApp({ Component, pageProps }: AppProps) {
  const preview = pageProps?.preview ?? false;
  return (
    <div>
      <Metadata />
      <PreviewBanner enabled={preview} />
      <main className="w-screen h-screen flex flex-col">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
