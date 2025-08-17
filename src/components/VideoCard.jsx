import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
   return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/watch/${videoId}`)}
    >
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <h3>{video.snippet.title}</h3>
    </div>
  );
}
