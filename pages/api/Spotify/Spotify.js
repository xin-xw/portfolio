import querystring from "querystring";

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const token_endpoint = `https://accounts.spotify.com/api/token`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;
const recently_played_endpoint = `https://api.spotify.com/v1/me/player/recently-played`;
const get_top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;
const get_top_artists_endpoint = `https://api.spotify.com/v1/me/top/artists`;

const getAccessToken = async () => {
    const response = await fetch(token_endpoint, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    return fetch(now_playing_endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getRecentTracks = async () => {
    const { access_token } = await getAccessToken();
    return fetch(recently_played_endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();
    return fetch(get_top_tracks_endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getTopArtists = async () => {
    const { access_token } = await getAccessToken();
    return fetch(get_top_artists_endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};