import VideoGrid from "../components/VideoGrid";

const sampleVideos = [
  { id: "1", title: "React Basics", channel: "Code Academy", thumbnail: "https://via.placeholder.com/300x200" },
  { id: "2", title: "Tailwind Tutorial", channel: "Dev Simplified", thumbnail: "https://via.placeholder.com/300x200" },
  { id: "3", title: "JavaScript Tips", channel: "JS Mastery", thumbnail: "https://via.placeholder.com/300x200" },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recommended Videos</h2>
      <VideoGrid videos={sampleVideos} />
    </div>
  );
}
