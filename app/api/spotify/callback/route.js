import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const error = searchParams.get("error");

  const savedState = request.cookies.get("spotify_auth_state")?.value;

  if (error) {
    return NextResponse.json({ error });
  }

  if (!code || !state || state !== savedState) {
    return NextResponse.json(
      { error: "Autentikasi tidak valid" },
      { status: 400 }
    );
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const credentials = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok || !data.refresh_token) {
    return NextResponse.json(
      { error: "Gagal mendapatkan token", detail: data },
      { status: 400 }
    );
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>Spotify Refresh Token</title></head>
      <body style="font-family:Arial;padding:30px">
        <h2>spotify berhasil terhubung</h2>
        <p>salin refresh token ini ke file .env.local</p>
        <textarea id="token" style="width:100%;height:100px">${data.refresh_token}</textarea>
        <br/><br/>
        <button onclick="navigator.clipboard.writeText(document.getElementById('token').value)">
          salin token
        </button>
        <p>jangan bagikan token ini kepada siapa pun</p>
      </body>
    </html>
  `;

  const result = new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });

  result.cookies.delete("spotify_auth_state");

  return result;
}
