import Image from "next/image";
import toast from "react-hot-toast";

interface VideoInfoProps {
  info: {
    thumbnail: string;
    title: string;
    description: string;
    tags: string[];
  };
}

export default function VideoInfo({ info }: VideoInfoProps) {
  const { thumbnail, title, description, tags } = info;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <button
            onClick={() => copyToClipboard(title, "Title")}
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            Copy Title
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-600 whitespace-pre-wrap">{description}</p>
          <button
            onClick={() => copyToClipboard(description, "Description")}
            className="text-sm text-blue-500 hover:text-blue-600 mt-2"
          >
            Copy Description
          </button>
        </div>
        {tags.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => copyToClipboard(tags.join(", "), "Tags")}
              className="text-sm text-blue-500 hover:text-blue-600 mt-2"
            >
              Copy Tags
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
