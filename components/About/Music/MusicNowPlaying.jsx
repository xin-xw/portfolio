import { createStyles, Overlay, HoverCard, Image, Paper, Box, Text, Title, Button } from '@mantine/core';
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

    category: {
        opacity: 1,
        fontWeight: 700,
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
        [theme.fn.smallerThan('md')]: {
            width: '325px',
        },
    },
}));

export function MusicNowPlaying() {
    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data } = useSWR('/api/Spotify/SpotifyGetRecentTracks', fetcher);

    const { classes } = useStyles();

    return (

        <Box className="classes.root" align="center">
            <Box classNames="classes.root">
                <Paper sx={{ paddingBottom: '10px' }}>
                    <Title order={5} align="left">
                        Now playing
                    </Title>
                </Paper>

            <Paper withBorder className={classes.selfPlayer} border={5}>
                <Text size="sm">
                    <Paper p={5}>
                        {/*<Text className={classes.category} size="xs">*/}
                        {/*    Now playing*/}
                        {/*</Text>*/}
                        <Text fw={700}>
                            {data?.title}
                        </Text>
                        <Text size="sm" color="theme.white">
                            {data?.artist}
                        </Text>

                    </Paper>

                </Text>
            </Paper>
        <Paper
          shadow="none"
          p="xl"
          radius="xs"
            // width={"300px"}
            // height={"300px"}
          sx={{ backgroundImage: `url(${data?.album_img_url})` }}
          className={classes.card}
            // src={data?.album_img_url}
            // alt={data?.album}
        >
            <div />
            <Button className={classes.button} component="a" href={data?.song_url} target="_blank" variant="white" color="dark">
                Listen on Spotify
            </Button>
        </Paper>

            </Box>
        </Box>
    );
}
