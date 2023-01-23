import {
    Title,
    Box,
    Group,
    Text,
    List,
    Paper,
    Timeline,
    Center,
    Highlight,
    Grid,
    Stack,
    HoverCard,
    Popover,
    Image,
    Anchor,
    MediaQuery,
    Flex,
    useMantineColorScheme,
    TimelineItem,
    Divider,
} from '@mantine/core';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import useStyles from './About.styles';
import { Contact } from './Contact/Contact';
import Music from './Music/Music';
import MusicRecentTrack from './Music/MusicRecentTrack';
import { ArticleCardImage, MusicNowPlaying } from './Music/MusicNowPlaying';
import AboutCarousel from './AboutCarousel/AboutCarousel';

export function About() {
    const { classes } = useStyles();
    const matches = useMediaQuery('(min-width: 1200px)');
    const colorScheme = useColorScheme();

    return (
        <Grid>

            <Grid.Col md={8}>
                <Center>
                    <Box className={classes.tableWrapper}>
                        <Image className={classes.table} src="/about/table.svg" />
                    </Box>
                </Center>
                <Box className={classes.description}>
                    <Text>
                        {'I was born all the way back in Fujian, China, but my family brought me to California at a young age. ' +
                            'Currently, I reside in the San Francisco Bay Area. If I\'m not there, ' +
                            'I would be with my family back down in Los Angeles. ' +
                            'Fortunately, this means that I\'m fluent in both Mandarin and English, so feel free to reach out to ' +
                            'me in either language!'}
                    </Text>
                    <Divider size="xs" my="xs" labelPosition="center" label="✽ ✽ ✽" />
                </Box>
                <Box>

                    {matches === true ? <AboutCarousel /> : null }
                </Box>

            </Grid.Col>
            <Grid.Col p="xl" md={4}>
                <Flex direction="column">
                    <Contact />
                    <MusicNowPlaying />
                    <Music />
                </Flex>

            </Grid.Col>
        </Grid>

    );
}
