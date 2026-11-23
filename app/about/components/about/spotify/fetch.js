
export default async function getNowPlayingItem() {
  try {
    const response = await fetch("/api/spotify/now-playing", {
      cache: "no-store",
    });

    if (!response.ok) {
      return { isPlaying: false };
    }

    return await response.json();
  } catch (error) {
    console.error("Spotify fetch error:", error);
    return { isPlaying: false };
  }
}
