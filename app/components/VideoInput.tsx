import { useState } from "react";
import { FaSearch, FaPaste } from "react-icons/fa";

interface VideoInputProps {
  onExtract: (url: string) => void;
  isLoading: boolean;
}

export default function VideoInput({ onExtract, isLoading }: VideoInputProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const validateUrl = (url: string): boolean => {
    const regExp = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return regExp.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateUrl(url)) {
      setError("");
      onExtract(url);
    } else {
      setError("Please enter a valid YouTube URL");
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text); // Set the pasted text into the URL state
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video URL here"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent2 bg-white text-gray-800 shadow-sm"
        />
        {url ? (
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-accent2 text-white rounded-r-md hover:bg-accent1 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 disabled:opacity-50 transition"
          >
            {isLoading ? "..." : <FaSearch />}
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePaste}
            className="px-4 py-2 bg-accent2 text-white rounded-r-md hover:bg-accent1 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 transition"
          >
            <FaPaste />
          </button>
        )}
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </div>
  );
}
