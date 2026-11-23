
export async function GET() {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return Response.json(
        { error: "Spotify credentials belum lengkap" },
        { status: 500 }
      );
    }

    const credentials = Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString("base64");

    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
        cache: "no-store",
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return Response.json(
        { error: "Gagal mendapatkan access token" },
        { status: 500 }
      );
    }

    const songResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        cache: "no-store",
      }
    );

    if (songResponse.status === 204 || songResponse.status === 202) {
      return Response.json({ isPlaying: false });
    }

    if (!songResponse.ok) {
  const errorData = await songResponse.json().catch(() => ({}));

  return Response.json({
    isPlaying: false,
    spotifyStatus: songResponse.status,
    spotifyMessage: errorData.error?.message || "Tidak diketahui",
  });
}

    const song = await songResponse.json();

    if (!song.item) {
      return Response.json({ isPlaying: false });
    }

    return Response.json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists
        .map((artist) => artist.name)
        .join(", "),
      albumImageUrl: song.item.album.images[0]?.url || "",
      songUrl: song.item.external_urls.spotify,
    });
  } catch (error) {
    return Response.json(
      { isPlaying: false, error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
