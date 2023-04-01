import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import Layout from "@/Layout/Layout";
import Head from "next/head";
import { inconsolata } from "@/fonts/fonts";


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Memo</title>
        <meta name="Memo" content="note taking app" />
        <link
          rel="icon"
          type="text/html"
          // href="https://img.icons8.com/bubbles/500/null/cancel-2.png"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider session={pageProps.session}>
            <main className={`${inconsolata.variable} font-incon`}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </main>
          </SessionProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
