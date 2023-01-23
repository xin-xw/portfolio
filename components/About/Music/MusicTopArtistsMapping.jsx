import useSWR from 'swr';
import MusicTopArtists from './MusicTopArtists';

export default function MusicTopArtistsMapping() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/Spotify/SpotifyGetTopArtists', fetcher);

    if (!data) {
        return null;
    }

    return (
        <>
            {data.artists.map((artist, index) => (
                <MusicTopArtists
                  ranking={index + 1}
                  key={artist.artist_img_url}
                  {...artist}
                />
            ))}
        </>
    );
}
