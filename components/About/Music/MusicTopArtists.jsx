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
    SimpleGrid, Button,

} from '@mantine/core';
import { IconPlaylist, IconBrandSpotify } from '@tabler/icons';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';

function ArtistTemplate({ ranking, artist_name, artist_img, spotify_url }) {
    const colorScheme = useColorScheme();
    const matches = useMediaQuery('(min-width: 1200px)');
    return (
    <Grid container="button" align="center" radius="xs" sx={{ padding: '5px' }}>
        <Grid.Col sm={2}>
            <Center>
                {
                    ranking === 1 &&

                    <Group spacing="5px">
                        <Title order={4} weight={500}>#{ranking}</Title>
                        <Title order={4}>🥇</Title>
                    </Group>

                }

                {
                    ranking === 2 &&
                    <Group spacing="5px" align="center">
                        <Title order={4} weight={500}>#{ranking}</Title>
                        <Title order={4}>🥈</Title>
                    </Group>

                }

                {
                    ranking === 3 &&
                    <Group spacing="5px" align="center">
                        <Title order={4} weight={500}>#{ranking}</Title>
                        <Title order={4}>🥉</Title>
                    </Group>

                }

                {(ranking !== 1 && ranking !== 2 && ranking !== 3) &&
                    <Title order={4} weight={500}>#{ranking}</Title>}
            </Center>
        </Grid.Col>

        <Grid.Col sm={10}>

            <Center>
                <Box sx={{ paddingRight: 30 }}>
                    <Center>

                        <Image src={artist_img} width={matches === true ? '100%' : '100%'} radius="md" />

                    </Center>

                </Box>
                <Box align="center" marginRight={30}>
                    <Flex direction="column" spacing="2px">
                        <Text truncate fw={700} fz="lg">{artist_name}</Text>

                    </Flex>
                    <Button
                      component="a"
                      target="_blank"
                      href={spotify_url}
                      variant="outline"
                      rightIcon={<IconBrandSpotify size="20px" />}
                      sx={(theme) => ({
                            marginTop: '10px',
                            color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
                            borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
                        })}
                    >
                        <Text fz="xs">View artist </Text>
                    </Button>
                </Box>
            </Center>
        </Grid.Col>
    </Grid>

);

    // return (
    //     <Card align={"center"} shadow="none" p="md" radius="xs" withBorder inheritPadding component="a" href={spotify_url} target="_blank">
    //         <Stack>
    //         <Stack align={"center"}>
    //             <Stack align={"center"}>
    //             {ranking === 1 ? <Title weight={500}>#{ranking}</Title> : <Title weight={500}>#{ranking}</Title>}
    //                 <Image src={artist_img} width="100px" height="100px" radius="0%" />
    //                 <Text truncate fw={700}>{artist_name}</Text>
    //             </Stack>
    //         </Stack>
    //         </Stack>
    //     </Card>
    //
    // );
}

export default function MusicTopArtists(artist) {
    return (
        <Paper
          withBorder
          sx={(theme) => ({

                color: theme.colorScheme === 'dark' ? 'none' : theme.colors.dark[9],
                borderColor: theme.colorScheme === 'dark' ? 'none' : theme.colors.dark[9],
                padding: '15px',
                marginTop: '10px',
                marginBottom: '10px',
            })}
        >
            <ArtistTemplate
              ranking={artist.ranking}
              artist_name={artist.artist_name}
              artist_img={artist.artist_img_url}
              spotify_url={artist.spotify_url}
            />
        </Paper>

    );
}
