
import { getTopTracks } from "./Spotify";

export default async (_, res) => {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        song_url: track.external_urls.spotify,
        title: track.name,
        album_art: track.album.images[0].url,
    }));

    // console.log(tracks)
    return res.status(200).json({ tracks });
};