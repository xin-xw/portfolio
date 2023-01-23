import {
    Box,
    Title,
    Image,
    Text,
    Card,
    Center,
    Flex,
    Stack,
    Grid,
    Space,
    Group,
    Divider,
    Paper,
} from '@mantine/core';

function TrackTemplate({ ranking, song_name, artist_name, spotify_url, album_art }) {
    return (
            <Card container="button" p="md" radius="xs" withBorder inheritPadding component="a" href={spotify_url} target="_blank">
                    <Stack>
                        {ranking === 1 ? <Title weight={500}>#{ranking} 🏆</Title> : <Title weight={500}>#{ranking}</Title>}
                        <Stack sx={{ marginLeft: '0px', marginTop: '-5px' }} align={"center"}>
                            <Stack align={"center"}>
                            <Image src={album_art} width="100px" radius="100%" />
                            <Flex direction="column" align={"center"}>
                                <Text truncate fw={700} fs={"xs"}>{song_name}</Text>
                                <Text truncate>{artist_name}</Text>
                            </Flex>
                            </Stack>

                        </Stack>

                    </Stack>

            </Card>

    );
}

export default function MusicTopTracks(track) {
    return (
        <Box my={10}>
            <TrackTemplate
              ranking={track.ranking}
              song_name={track.title}
              artist_name={track.artist}
              spotify_url={track.song_url}
              album_art={track.album_art}
            />
        </Box>

    );
}
