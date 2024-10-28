import Layout from "@/components/home-page/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout> <Component {...pageProps} /></Layout>;
}
