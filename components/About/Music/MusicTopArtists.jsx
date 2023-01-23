import {
    Box,
    Title,
    Image,
    Text,
    SimpleGrid,
    Card,
    Flex,
    Stack,
    Grid,
    Space,
    Group,
    Divider,
    Paper,
} from '@mantine/core';

function ArtistTemplate({ ranking, artist_name, artist_img, spotify_url }) {
    return (
        <Card align={"center"} shadow="none" p="md" radius="xs" withBorder inheritPadding component="a" href={spotify_url} target="_blank">
            <Stack>
            <Stack align={"center"}>
                <Stack align={"center"}>
                {ranking === 1 ? <Title weight={500}>#{ranking}</Title> : <Title weight={500}>#{ranking}</Title>}
                    <Image src={artist_img} width="100px" height="100px" radius="0%" />
                    <Text truncate fw={700}>{artist_name}</Text>
                </Stack>
            </Stack>
            </Stack>
        </Card>

    );
}

export default function MusicTopArtists(artist) {
    return (
        <Box my={10} align={"center"}>
            <ArtistTemplate
              ranking={artist.ranking}
              artist_name={artist.artist_name}
              artist_img={artist.artist_img_url}
              spotify_url={artist.spotify_url}
            />
        </Box>

    );
}
