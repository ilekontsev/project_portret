import Main from "@/app/mainComponents/main/main";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const isClearLayer = (Component as any).isClearLayer ?? false;

  return (
    <>
      {isClearLayer ? (
        <Component {...pageProps} />
      ) : (
        <Main>
          <Component {...pageProps} />
        </Main>
      )}
    </>
  );
}
