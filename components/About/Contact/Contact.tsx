import {
    Title,
    Box,
    Text,
    List,
    Paper,
    Timeline,
    Divider,
    Center,
    Highlight,
    Grid,
    HoverCard,
    Popover,
    Image,
    Anchor,
    Button,

    MediaQuery,
    useMantineColorScheme,
    TimelineItem,
    SimpleGrid,
} from '@mantine/core';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import { IconBrandLinkedin, IconBrandGithub, IconMailForward, IconFileDescription } from '@tabler/icons';
import useStyles from './Contact.styles';

export function Contact() {
    const { classes } = useStyles();
    const matches = useMediaQuery('(min-width: 1200px)');
    const colorScheme = useColorScheme();

    return (
<Center>
        <Box className={classes.root}>
            <Paper className={classes.section}>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/xin-w"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  rightIcon={<IconBrandLinkedin />}
                >
                    Connect with me on LinkedIn
                </Button>
            </Paper>
            <Paper className={classes.section}>
                <Button
                  component="a"
                  href="https://github.com/xinwang-git"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  rightIcon={<IconBrandGithub />}
                >
                    View repositories on Github
                </Button>
            </Paper>
            <Paper className={classes.section}>
                <Button
                  component="a"
                  href="mailto:xin@xinw.org"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  rightIcon={<IconMailForward />}
                >
                    Send me an e-mail
                </Button>
            </Paper>
            <Paper className={classes.section}>
                <Button
                  component="a"
                  href="/about/Xin_Wang_Resume.pdf"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  rightIcon={<IconFileDescription />}
                >
                    View my current resume
                </Button>
            </Paper>
        </Box>
</Center>
    );
}
