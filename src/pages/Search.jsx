import { useParams } from "react-router-dom";
import VideoGrid from "../components/VideoGrid";

export default function Search() {
  const { query } = useParams();

  const searchResults = [
    { id: "4", title: `Result for ${query}`, channel: "YT Channel", thumbnail: "https://via.placeholder.com/300x200" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search Results for "{query}"</h2>
      <VideoGrid videos={searchResults} />
    </div>
  );
}
