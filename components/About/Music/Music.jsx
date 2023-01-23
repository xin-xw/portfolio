import {
    Center,
    Accordion,

} from '@mantine/core';
import MusicTopTracksMapping from './MusicTopTracksMapping';
import MusicTopArtistsMapping from './MusicTopArtistsMapping';
import {ArticleCardImage} from "./MusicNowPlaying";

export default function Music() {
    return (

        <Center>
            <Accordion variant="separated" sx={{ width: '500px' }} radius="xs" chevronPosition="right">
                <Accordion.Item value="topSongs">
                    <Accordion.Control>Top songs this month</Accordion.Control>
                    <Accordion.Panel>
                        <MusicTopTracksMapping />
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="topArtists">
                    <Accordion.Control>Top artists this month</Accordion.Control>
                    <Accordion.Panel><MusicTopArtistsMapping /></Accordion.Panel>
                </Accordion.Item>

            </Accordion>
        </Center>
    );
}
