import { useParams } from "react-router-dom";
import PlayerWithNotes from "../components/PlayerWithNotes";

export default function Watch() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Watching Video ID: {id}</h2>
      <PlayerWithNotes videoId="dQw4w9WgXcQ" /> {/* demo video */}
    </div>
  );
}
