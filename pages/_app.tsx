import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, TypographyStylesProvider, Box, Title, MantineThemeOverride, Container, ColorScheme, ColorSchemeProvider, Global } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import { IconHome, IconDirections, IconUser, IconBrandAsana } from '@tabler/icons';
import NavigationBarUsage from '../components/Header/NavigationBar/NavigationBar.story';
import Fonts from '../components/Fonts';
// @ts-ignore

// import { interBold } from '../../../../../fonts/InterBold.ttf';
// import { interSemiBold } from '../public/fonts/InterSemiBold.ttf';
// import { interExtraBold } from '../public/fonts/InterExtraBold.ttf';
// import { interLight } from '../public/fonts/InterLight.ttf';
// import { interMedium } from '../public/fonts/InterMedium.ttf';
// import { interRegular } from '../public/fonts/InterRegular.ttf';

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />

      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <Fonts />
          <MantineProvider
            theme={

                {
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
                        xs: 12,
                        sm: 13,
                        md: 14,
                        lg: 16,
                        xl: 20,
                    },

                    fontFamily: 'Gotham, sans-serif',
                    headings: { fontFamily: 'Lora, serif' },
                    // fontFamily: 'Lora',
                    // headings: { fontFamily: 'Inter, sans-serif' },

                }
          }
            withGlobalStyles
            withNormalizeCSS
          >
          <SpotlightProvider
            shortcut={['mod + P', 'mod + K', '/']}
            actions={actions}
            highlightQuery
          >
          <NotificationsProvider>

            <NavigationBarUsage />
              <Container sx={{ paddingTop: '150px' }}>
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
