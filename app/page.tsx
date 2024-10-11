import VideoExtractor from "./components/VideoExtractor";
import FeatureList from "./components/FeatureList"; // Import the FeatureList component

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <main>
        <VideoExtractor />
        <Instructions />
        <FeatureList /> {/* Add the FeatureList component here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

function Instructions() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">How to use:</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Paste your YouTube video link in the input field above.</li>
        <li>Click the search icon or press Enter.</li>
        <li>View the extracted title, description, and other metadata.</li>
      </ol>
    </section>
  );
}
