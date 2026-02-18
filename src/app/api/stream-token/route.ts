import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { videoId } = await req.json();

  if (!videoId) {
    return NextResponse.json({ error: "Video ID required" }, { status: 400 });
  }

  const privateKey = process.env.CLOUDFLARE_STREAM_PRIVATE_KEY;
  const keyId = process.env.CLOUDFLARE_STREAM_KEY_ID;

  if (!privateKey || !keyId) {
    return NextResponse.json(
      { error: "Cloudflare Stream configuration missing" },
      { status: 500 }
    );
  }

  const token = jwt.sign(
    {
      sub: videoId,
      kid: keyId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    privateKey,
    {
      algorithm: "RS256",
    }
  );

  return NextResponse.json({ token });
}
