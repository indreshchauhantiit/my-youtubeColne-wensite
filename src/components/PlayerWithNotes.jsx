import { useState } from "react";

export default function PlayerWithNotes({ videoId }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim()) {
      setNotes([...notes, text]);
      setText("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <iframe
        className="w-full h-80 rounded"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div>
        <h2 className="font-bold mb-2">My Notes</h2>
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a note..."
            className="border p-2 rounded w-full"
          />
          <button onClick={addNote} className="bg-blue-500 text-white px-4 rounded">
            Add
          </button>
        </div>
        <ul className="mt-2 list-disc list-inside">
          {notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
