"use client";

import { useState } from "react";
import VideoInput from "./VideoInput";
import VideoInfo from "./VideoInfo";

export default function VideoExtractor() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleExtract = async (url: string) => {
    setIsLoading(true);
    setError("");
    try {
      // TODO: Implement API call to extract video information
      const response = await fetch(
        `/api/extract?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        throw new Error("Failed to extract video information");
      }
      const data = await response.json();
      setVideoInfo(data);
    } catch (err) {
      setError("An error occurred while extracting video information");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <VideoInput onExtract={handleExtract} isLoading={isLoading} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {videoInfo && <VideoInfo info={videoInfo} />}
    </div>
  );
}
