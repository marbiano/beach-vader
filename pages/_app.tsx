// @ts-check
import Head from 'next/head';

import { AddressProvider } from '../hooks/use-address';
import { globalCss } from '../stitches.config';

const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '100 900',
      fontDisplay: 'swap',
      src: 'url(/fonts/inter-variable.woff2) format("woff2")',
    },
    {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontDisplay: 'swap',
      src: 'url(/fonts/inter-bold.woff2) format("woff2")',
    },
    {
      fontFamily: 'Inter',
      fontWeight: '900',
      fontDisplay: 'swap',
      src: 'url(/fonts/inter-black.woff2) format("woff2")',
    },
  ],
  html: {
    boxSizing: 'border-box',
  },
  '*,*:before,*:after': {
    boxSizing: 'inherit',
  },
  body: {
    color: '$white',
    background:
      'radial-gradient(39% 58% at 94% 6%, $green15 0%, $green00 68%), radial-gradient(44% 44% at 64% 10%, $orange15 0%, $white00 82%), linear-gradient(222deg, $orange05 10%, $white00 60%), $black',
    backgroundAttachment: 'fixed',
    fontFamily: '$sans',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  a: {
    color: '$orange',
  },
});

const meta = {
  title: 'Beach Vader',
  description: 'Darth Vader’s generated phrases as NFTs.',
  image: 'https://vader.marbiano.com/og_image.png',
};

export default function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:url" content="https://vader.marbiano.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@marbiano3" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <AddressProvider>
        <Component {...pageProps} />
      </AddressProvider>
    </>
  );
}
