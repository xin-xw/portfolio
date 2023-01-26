import {
    Center,
    Accordion,
    Modal,
    Button,
Box, Flex,
    Stack,
Group,
} from '@mantine/core';
import { useState } from 'react';
import MusicTopTracksMapping from './MusicTopTracksMapping';
import MusicTopArtistsMapping from './MusicTopArtistsMapping';
import { ArticleCardImage } from './MusicNowPlaying';
import useStyles from './Music.styles';

export default function Music() {
    const { classes } = useStyles();
    const [openTopSongs, setOpenTopSongs] = useState(false);
    const [openTopArtists, setOpenTopArtists] = useState(false);
    return (

            <Box>

                <Modal
                  opened={openTopSongs}
                  onClose={() => setOpenTopSongs(false)}
                  title="My top songs for this month"
                >
                    <MusicTopTracksMapping />
                </Modal>
                <Modal
                  opened={openTopArtists}
                  onClose={() => setOpenTopArtists(false)}
                  title="My top artists for this month"
                >
                    <MusicTopTracksMapping />
                </Modal>
                <Stack direction="column" spacing="xs">
                    <Button variant="outline" className={classes.button} onClick={() => setOpenTopSongs(true)}>Top songs this month</Button>
                    <Button variant="outline" className={classes.button} onClick={() => setOpenTopArtists(true)}>Top artists this month</Button>
                </Stack>
            {/*<Accordion variant="separated" sx={{ width: '500px' }} radius="xs" chevronPosition="right">*/}
            {/*    <Accordion.Item value="topSongs">*/}
            {/*        <Accordion.Control>Top songs this month</Accordion.Control>*/}
            {/*        <Accordion.Panel>*/}
            {/*            <MusicTopTracksMapping />*/}
            {/*        </Accordion.Panel>*/}
            {/*    </Accordion.Item>*/}

            {/*    <Accordion.Item value="topArtists">*/}
            {/*        <Accordion.Control>Top artists this month</Accordion.Control>*/}
            {/*        <Accordion.Panel><MusicTopArtistsMapping /></Accordion.Panel>*/}
            {/*    </Accordion.Item>*/}

            {/*</Accordion>*/}
            </Box>

    );
}
