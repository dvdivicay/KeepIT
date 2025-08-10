import React, { useEffect, useState } from "react";

function CreateArea({ selectedNote, onAdd, onUpdate, onCancelEdit }) {
  const [note, setNote] = useState({ id: null, title: "", content: "" });

  useEffect(() => {
    if (selectedNote) {
      setNote({
        id: selectedNote.id,
        title: selectedNote.title || "",
        content: selectedNote.content || "",
      });
    } else {
      setNote({ id: null, title: "", content: "" });
    }
  }, [selectedNote]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (note.id) {
      onUpdate(note);
    } else {
      onAdd(note);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mode-chip">{note.id ? "Editing" : "New note"}</div>

        {note.id && (
          <button
            type="button"
            className="exit-edit-btn"
            onClick={onCancelEdit}
          >
            Exit Editing
          </button>
        )}

        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">{note.id ? "✔" : "+"}</button>
      </form>
    </div>
  );
}

export default CreateArea;
