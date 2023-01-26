import { Global } from '@mantine/core';
// import bold from '../../../../../;
// import heavy from './GreycliffCF-Heavy.woff2';

export default function Fonts() {
    return (
        <Global
          styles={[
              {
                  '@font-face': {
                      fontFamily: 'Gotham',
                      src: 'url(\'fonts/gothambold-webfont.woff2\'\') format("woff2")',
                      fontWeight: 700,
                      fontStyle: 'bold',
                  },
              },
              {
                    '@font-face': {
                        fontFamily: 'Gotham',
                        src: 'url(\'fonts/gothambook-webfont.woff2\'\') format("woff2")',
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },

                },
              {
                  '@font-face': {
                      fontFamily: 'Proxima Nova',
                      src: 'url(\'fonts/proxima-nova-bold.woff\'\') format("woff")',
                      fontWeight: 700,
                      fontStyle: 'normal',
                  },

              },
              {
                  '@font-face': {
                      fontFamily: 'Proxima Nova',
                      src: 'url(\'fonts/proxima-nova-reg.woff\'\') format("woff")',
                      fontWeight: 400,
                      fontStyle: 'normal',
                  },

              },
              {
                  '@font-face': {
                      fontFamily: 'Proxima Nova',
                      src: 'url(\'fonts/proxima-nova-light.woff\'\') format("woff")',
                      fontWeight: 200,
                      fontStyle: 'normal',
                  },

              },
              {
                  '@font-face': {
                      fontFamily: 'Gotham',
                      src: 'url(\'fonts/gothamblackitalic-webfont.woff2\'\') format("woff2")',
                      fontWeight: 700,
                      fontStyle: 'italic',
                  },

              },
            ]}
        />
    );
}
