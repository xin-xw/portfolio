import {
    Title,
    Blockquote,
    Box,
    Text,
    List,
    Paper,
    Flex,
    Stack,
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
        <Box>

        <Stack spacing="xs" className={classes.root}>
            <Paper>
                <Title order={5}>
                    Contact me
                </Title>
            </Paper>

                <Button
                  component="a"
                  href="https://www.linkedin.com/in/xin-w"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconBrandLinkedin size="20px" />}
                >
                    Connect on LinkedIn
                </Button>

                <Button
                  component="a"
                  href="https://github.com/xinwang-git"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconBrandGithub size="20px" />}
                >
                    Browse my GitHub
                </Button>

                <Button
                  component="a"
                  href="mailto:xin@xinw.org"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconMailForward size="20px" />}
                >
                    Send me an email
                </Button>

                <Button
                  component="a"
                  href="/about/Xin_Wang_Resume.pdf"
                  target="_blank"
                  className={classes.buttonColor}
                  variant="outline"
                  leftIcon={<IconFileDescription size="20px" />}
                >
                    View current resume
                </Button>

        </Stack>
        </Box>
    );
}
