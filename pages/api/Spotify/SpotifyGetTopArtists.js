
import { getTopArtists } from "./Spotify";

export default async (_, res) => {
    const response = await getTopArtists();
    const { items } = await response.json();

    const artists = items.slice(0, 10).map((artist) => ({
        artist_name: artist.name,
        artist_img_url: artist.images[0].url,
        spotify_url: artist.external_urls.spotify
    }));

    // console.log(artists)
    return res.status(200).json({ artists });
};