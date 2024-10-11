import VideoExtractor from "./components/VideoExtractor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube Video Extractor</title>
        <meta
          name="description"
          content="Extract information from YouTube videos easily"
        />
        <meta
          name="keywords"
          content="YouTube, video, extractor, thumbnail, title, description, tags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <header className="p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-center">
            YouTube Video Extractor
          </h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          <VideoExtractor />
        </main>
        <footer className="p-4 bg-gray-100 text-center">
          <p className="text-sm text-gray-600">
            © 2024 YouTube Video Extractor
          </p>
        </footer>
      </div>
    </>
  );
}
