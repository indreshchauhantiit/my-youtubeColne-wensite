import { useParams } from "react-router-dom";
import PlayerWithNotes from "../components/PlayerWithNotes";

export default function Watch() {
  const { id } = useParams();

  return (
    <div className="flex justify-center p-4">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
