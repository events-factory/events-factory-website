import { NextRequest, NextResponse } from "next/server";
import { getAlbumPhotos } from "@/lib/flickr";

export async function GET(request: NextRequest) {
  const albumId = request.nextUrl.searchParams.get("id");

  if (!albumId) {
    return NextResponse.json({ error: "Missing album id" }, { status: 400 });
  }

  const photos = await getAlbumPhotos(albumId, 500);
  return NextResponse.json({ photos });
}
