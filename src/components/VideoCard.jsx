import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Link
      to={`/watch/${video.id}`}
      className="bg-white rounded shadow hover:shadow-lg transition p-2"
    >
      <img src={video.thumbnail} alt={video.title} className="rounded mb-2" />
      <h3 className="font-semibold">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.channel}</p>
    </Link>
  );
}
