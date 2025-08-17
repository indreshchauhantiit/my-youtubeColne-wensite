import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="bg-white p-3 shadow flex">
      <form onSubmit={handleSearch} className="flex w-full">
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-l w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
          Search
        </button>
      </form>
    </div>
  );
}
