import useSWR from 'swr';
import MusicTopTracks from './MusicTopTracks';

export default function MusicTopTracksMapping() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/Spotify/SpotifyGetTopTracks', fetcher);

    if (!data) {
        return null;
    }

    return (
        <>
            {data.tracks.map((track, index) => (
                <MusicTopTracks
                  ranking={index + 1}
                  key={track.songUrl}
                  {...track}
                />
            ))}
        </>
    );
}
