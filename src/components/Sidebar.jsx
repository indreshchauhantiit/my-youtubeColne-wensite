import { Home, Search, PlayCircle, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-56 bg-white shadow-md p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">YT Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-500">
          <Home size={20} /> Home
        </Link>
        <Link to="/search/react" className="flex items-center gap-2 hover:text-blue-500">
          <Search size={20} /> Search
        </Link>
        <Link to="/watch/123" className="flex items-center gap-2 hover:text-blue-500">
          <PlayCircle size={20} /> Watch
        </Link>
        <Link to="/watchlist" className="flex items-center gap-2 hover:text-blue-500">
          <Bookmark size={20} /> Watchlist
        </Link>
      </nav>
    </div>
  );
}
