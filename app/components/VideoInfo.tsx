import Image from "next/image";
import toast from "react-hot-toast";
import { FaShareAlt, FaDownload, FaLink, FaCopy } from "react-icons/fa";

interface VideoInfoProps {
  info: {
    thumbnail: string;
    title: string;
    description: string;
    tags: string[];
    viewCount: string;
    likeCount: string;
    commentCount: string;
    videoId: string;
  };
}

export default function VideoInfo({ info }: VideoInfoProps) {
  const {
    thumbnail,
    title,
    description,
    tags,
    viewCount,
    likeCount,
    commentCount,
    videoId,
  } = info;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const downloadThumbnail = () => {
    const link = document.createElement("a");
    link.href = thumbnail;
    link.download = `thumbnail_${videoId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Thumbnail download started!");
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="relative h-0 pb-[56.25%]">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => window.open(thumbnail, "_blank")}
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={() => copyToClipboard(title, "Title")}
            className="text-orange-500 hover:text-orange-600"
            title="Copy title"
          >
            <FaCopy />
          </button>
        </div>
        <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{viewCount} views</span>
          <span>{likeCount} likes</span>
          <span>{commentCount} comments</span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() =>
              copyToClipboard(
                `https://www.youtube.com/watch?v=${videoId}`,
                "Video URL"
              )
            }
            className="text-orange-500 hover:text-orange-600"
            title="Copy video URL"
          >
            <FaLink />
          </button>
          <button
            onClick={downloadThumbnail}
            className="text-orange-500 hover:text-orange-600"
            title="Download thumbnail"
          >
            <FaDownload />
          </button>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <button
              onClick={() => copyToClipboard(description, "Description")}
              className="text-orange-500 hover:text-orange-600"
              title="Copy description"
            >
              <FaCopy />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap max-h-40 overflow-y-auto">
            {description}
          </p>
        </div>
        {tags.length > 0 && (
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <button
                onClick={() => copyToClipboard(tags.join(", "), "Tags")}
                className="text-orange-500 hover:text-orange-600"
                title="Copy tags"
              >
                <FaCopy />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
