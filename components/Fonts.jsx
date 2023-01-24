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
                      fontFamily: 'Gotham',
                      src: 'url(\'fonts/gothamblackitalic-webfont.woff2\'\') format("woff2")',
                      fontWeight: 700,
                      fontStyle: 'italic',
                  },

              },
                // {
                //     '@font-face': {
                //         fontFamily: 'Greycliff CF',
                //         src: `url('${heavy}') format("woff2")`,
                //         fontWeight: 900,
                //         fontStyle: 'normal',
                //     },
                // },
            ]}
        />
    );
}
