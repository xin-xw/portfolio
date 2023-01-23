import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, Container, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import { IconHome, IconDirections, IconUser, IconBrandAsana } from '@tabler/icons';
import { useHref } from 'react-router';
import NavigationBarUsage from '../components/Header/NavigationBar/NavigationBar.story';

// @ts-ignore
const onTrigger = () => { console.log('spotlight opened'); };

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
const router = useRouter();
const actions: SpotlightAction[] = [
    { title: 'Home',
        description: 'To the home page',
        group: 'pages',
        icon: <IconHome size={18} />,
        onTrigger: () => { router.push('/'); } },
    { title: 'About me',
        description: 'Dive deeper into my interests',
        group: 'pages',
        icon: <IconUser size={18} />,
        onTrigger: () => { router.push('/about'); } },
    { title: 'Journey',
        description: 'Past and present experiences and accomplishments',
        group: 'pages',
        icon: <IconDirections size={18} />,
        onTrigger: () => { router.push('/journey'); } },
    { title: 'Projects',
        description: 'More information about the projects that I\'ve worked on',
        icon: <IconBrandAsana size={18} />,
        group: 'pages',
        onTrigger: () => { router.push('/projects'); } },
    { title: 'Resume', group: 'contact', onTrigger: () => { router.push('https://docs.google.com/document/d/1gGoY0ABd9oIEEsBSc0reOUmQMlBdp2frPLuuO9Y-kKw/edit?usp=sharing'); } },
    { title: 'Email', group: 'contact', onTrigger: () => { router.push('mailto:xin@xinw.org'); } },
    { title: 'LinkedIn', group: 'contact', onTrigger: () => { router.push('https://www.linkedin.com/in/xin-w/'); } },
];
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
        <MantineProvider
          theme={{
              colorScheme,
              colors: {
                  'gundam-blue': [
                      '#E6E9EE',
                      '#CBD1DF',
                      '#AFBCD3',
                      '#93A6CD',
                      '#7492CB',
                      '#527DD0',
                      '#2C68DC',
                      '#3361BB',
                      '#3A5B9C',
                      '#3D5583',
                  ],
                  dark: [
                      '#E6E6E6',
                      '#353535',
                      '#E6E6E6',
                      '#2C2C2C',
                      '#282828',
                      '#242424',
                      '#212121',
                      '#1E1E1E',
                      '#1B1B1B',
                      '#181818',
                  ],
              },
              defaultRadius: 'xs',
              primaryColor: 'gundam-blue',
              primaryShade: { light: 5, dark: 7 },
              fontSizes: {
                  xs: 10,
                  sm: 12,
                  md: 16,
                  lg: 16,
                  xl: 20,
              },
              headings: {
                  // properties for all headings

                  // properties for individual headings, all of them are optional
                  sizes: {
                      h1: { fontWeight: 700, fontSize: 22 },
                      // h2: { fontSize: 28, lineHeight: 1.5 },
                      // ...up to h6
                      // h6: { fontWeight: 900 },
                  },
              },

          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <SpotlightProvider
            shortcut={['mod + P', 'mod + K', '/']}
            actions={actions}
            highlightQuery
          >
          <NotificationsProvider>

            <Container sx={{ paddingBottom: '150px' }}>
            <NavigationBarUsage />
              <Component {...pageProps} key={router.asPath} />

            </Container>
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
