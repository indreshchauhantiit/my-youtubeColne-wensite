import { useParams } from "react-router-dom";
import PlayerWithNotes from "../components/PlayerWithNotes";

export default function Watch() {
  const { id } = useParams();

  function Watch({ videoId }) {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!videoId) return;

    async function fetchComments() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=10&key=${API_KEY}`
        );
        const data = await res.json();
        setComments(data.items || []);
      } catch (err) {
        console.error("Failed to load comments:", err);
        setError("Unable to load comments.");
      }
      setLoading(false);
    }

    fetchComments();
  }, [videoId]);

  if (!videoId) return <EmptyState text="▶️ Select a video to watch." />;

  return (
    <div className="p-4">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="w-full h-[500px] rounded"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">💬 Comments</h3>

        {loading && <Loader />}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !comments.length && <EmptyState text="No comments available." />}

        <ul className="space-y-4">
          {comments.map((c) => {
            const { authorDisplayName, authorProfileImageUrl, textDisplay } =
              c.snippet.topLevelComment.snippet;
            return (
              <li key={c.id} className="flex space-x-3">
                <img
                  src={authorProfileImageUrl}
                  alt={authorDisplayName}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{authorDisplayName}</p>
                  <p
                    className="text-gray-700 text-sm"
                    dangerouslySetInnerHTML={{ __html: textDisplay }}
                  ></p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

}
