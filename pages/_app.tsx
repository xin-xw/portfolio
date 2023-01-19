import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
// @ts-ignore
const onTrigger = () => { console.log('spotlight opened'); };

const actions: SpotlightAction[] = [
  { title: 'Home', group: 'pages', onTrigger },
  { title: 'About me', group: 'pages', onTrigger },
  { title: 'Projects', group: 'pages', onTrigger },
  { title: 'Resume', group: 'contact', onTrigger },
  { title: 'Email', group: 'contact', onTrigger },
  { title: 'LinkedIn', group: 'contact', onTrigger },
];

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>@xin</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <SpotlightProvider
            shortcut={['mod + P', 'mod + K', '/']}
            actions={actions}
            highlightQuery
          >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
