import "../globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "../components/authProvider";
import axios from "axios";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head key="app">
        <meta
          name="google-site-verification"
          content="41JnQVpbFAf9rGtnptrMLZEEkXDQEiPM7vA4jJgA-Jg"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
