import {
    Title,
    Blockquote,
    Box,
    Text,
    List,
    Paper,
    Flex,
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
            <Paper>
                <Title order={5}>
                    Contact me
                </Title>
            </Paper>

            <Flex className={classes.section}>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/xin-w"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconBrandLinkedin />}
                >
                    Connect on LinkedIn
                </Button>
            </Flex>
            <Flex className={classes.section}>
                <Button
                  component="a"
                  href="https://github.com/xinwang-git"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconBrandGithub />}
                >
                    Browse my GitHub
                </Button>
            </Flex>
            <Flex className={classes.section}>
                <Button
                  component="a"
                  href="mailto:xin@xinw.org"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconMailForward />}
                >
                    Send me an email
                </Button>
            </Flex>
            <Flex className={classes.section}>
                <Button
                  component="a"
                  href="/about/Xin_Wang_Resume.pdf"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconFileDescription />}
                >
                    View current resume
                </Button>
            </Flex>
        </Box>
</Center>
    );
}
