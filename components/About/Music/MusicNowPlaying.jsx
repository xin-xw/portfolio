import { createStyles, Loader, Stack, Group, Overlay, HoverCard, Image, Paper, Box, Text, Title, Button } from '@mantine/core';
import useSWR from 'swr';
import { useState } from 'react';
import { IconMusic } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    root: {

        root: {
            marginBottom: '10px',
        },
    },
    card: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },

    title: {
        fontWeight: 500,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: 22,
        marginTop: theme.spacing.xs,
    },

    songData: {
      textTransform: 'uppercase',

    },
    button: {
        marginTop: 50,
    },
    selfPlayer: {
        width: '100%',
        maxWidth: '500px',
        color: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
        borderColor: theme.colorScheme === 'dark' ? 'white' : theme.colors.dark[9],
    },
}));

export function NowPlayingLoader() {
    return <Loader color="dark" variant="bars" />;
}
export function MusicNowPlaying() {
    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data } = useSWR('/api/Spotify/SpotifyGetRecentTracks', fetcher);

    const { classes } = useStyles();

    return (

        <Box className="classes.root" align="center">
                <Paper sx={{ paddingBottom: '10px' }}>
                    <Title order={5} align="left">
                        Currently listening to
                    </Title>
                </Paper>
            <Paper classNames="classes.selfPlayer" display={data || NowPlayingLoader}>
                <Image
                  radius="xs"
                  height="200px"
                  sx={{ backgroundImage: `url(${data?.album_img_url})` }}
                  className={classes.card}
                >
                    <div>
                    <Button className={classes.button} component="a" href={data?.song_url} target="_blank" variant="white" color="dark">
                        Listen on Spotify
                    </Button>
                    </div>
                </Image>

                <Box classNames="classes.root" display={data || NowPlayingLoader}>
                    <Paper withBorder className={classes.selfPlayer}>
                        <Stack spacing="1" overflow="hidden">
                            <Text fz="sm" fw={700} sx={{ marginTop: '5px' }}>
                                {data?.title}
                            </Text>
                            <Text fz="xs" className={classes.songData} sx={{ marginBottom: '5px' }}>
                                {data?.artist}
                            </Text>

                        </Stack>
                    </Paper>
                </Box>
            </Paper>
        </Box>

    );
}
