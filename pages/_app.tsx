import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
