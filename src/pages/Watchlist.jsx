// src/pages/Watchlist.jsx
import { useEffect, useState } from "react";
import VideoGrid from "../components/VideoGrid";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Load saved watchlist from localStorage
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter(
      (video) => video.id?.videoId !== id && video.id !== id
    );
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-gray-100 mb-6">My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-gray-400">No videos saved in your watchlist.</p>
      ) : (
        <div>
          {/* Custom VideoGrid with remove option */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {watchlist.map((video) => (
              <div key={video.id?.videoId || video.id} className="relative">
                <VideoGrid videos={[video]} />
                <button
                  onClick={() =>
                    removeFromWatchlist(video.id?.videoId || video.id)
                  }
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
