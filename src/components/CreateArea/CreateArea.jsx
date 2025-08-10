import React, { useEffect, useState } from "react";
import "./create-area.css";

export default function CreateArea({
  selectedNote,
  onAdd,
  onUpdate,
  onCancelEdit,
}) {
  const [note, setNote] = useState({ id: null, title: "", content: "" });

  useEffect(() => {
    if (selectedNote) setNote(selectedNote);
    else setNote({ id: null, title: "", content: "" });
  }, [selectedNote]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((n) => ({ ...n, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (note.id) onUpdate(note);
    else onAdd(note);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ---- topbar: mode + exit ---- */}
      <div className="form-topbar">
        <div className="mode-chip">{note.id ? "Editing" : "New note"}</div>
      </div>

      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        value={note.content}
        onChange={handleChange}
        rows={10}
      />
      <button type="submit" aria-label={note.id ? "Save changes" : "Add note"}>
        {note.id ? "✓" : "+"}
      </button>
    </form>
  );
}
