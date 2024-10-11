import { NextResponse } from "next/server";
import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing URL parameter" },
      { status: 400 }
    );
  }

  try {
    const videoId = extractVideoId(url);
    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 }
      );
    }

    const response = await youtube.videos.list({
      part: ["snippet"],
      id: [videoId],
    });

    const videoDetails = response.data.items?.[0]?.snippet;

    if (!videoDetails) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    const videoInfo = {
      thumbnail:
        videoDetails.thumbnails?.maxres?.url ||
        videoDetails.thumbnails?.high?.url ||
        videoDetails.thumbnails?.default?.url,
      title: videoDetails.title,
      description: videoDetails.description,
      tags: videoDetails.tags || [],
    };

    return NextResponse.json(videoInfo);
  } catch (error) {
    console.error("Error extracting video information:", error);
    return NextResponse.json(
      { error: "Failed to extract video information" },
      { status: 500 }
    );
  }
}

function extractVideoId(url: string): string | null {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}
