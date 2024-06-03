import React from 'react';
import '../styles/global.css';  // Adjust the path to your global styles as needed.
import type { AppProps } from 'next/app';

// Define the MyApp component
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
