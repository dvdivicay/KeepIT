import React, { useEffect, useState } from "react";
import notesData from "../notes";
import CreateArea from "./CreateArea";

function Main() {
  const [notes, setNotes] = useState([]);
  const [showLeft, setShowLeft] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  // seed from localStorage or notes.js
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setNotes(JSON.parse(saved));
    } else {
      setNotes(
        notesData.map((n) => ({
          id: n.key,
          title: n.title,
          content: n.content,
        }))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleAdd(note) {
    const trimmed = {
      title: (note.title || "").trim(),
      content: (note.content || "").trim(),
    };
    if (!trimmed.title && !trimmed.content) return;

    const withId = { ...trimmed, id: Date.now() };
    setNotes((prev) => [withId, ...prev]);
    setSelectedId(withId.id);
  }

  function handleUpdate(updated) {
    setNotes((prev) =>
      prev.map((n) => (n.id === updated.id ? { ...n, ...updated } : n))
    );
  }

  function handleDelete(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (selectedId === id) setSelectedId(null);
  }

  function handleCancelEdit() {
    setSelectedId(null);
  }

  const selectedNote = notes.find((n) => n.id === selectedId) || null;

  return (
    <div className={`layout ${showLeft ? "" : "left-collapsed"}`}>
      {/* LEFT SIDEBAR */}
      <aside className="sidebar left">
        <div className="left-topbar">
          <button
            className="toggle-left"
            onClick={() => setShowLeft((s) => !s)}
          >
            {showLeft ? "◀" : "▶"}
          </button>
          {showLeft && <span className="count-badge">{notes.length}</span>}
        </div>

        <ul className="preview-list">
          {notes.map((n) => (
            <li
              key={n.id}
              className={`preview-item ${selectedId === n.id ? "active" : ""}`}
              onClick={() => setSelectedId(n.id)}
              title="Click to edit"
            >
              <div className="preview-title">{n.title || "Untitled"}</div>
              <div className="preview-snippet">
                {(n.content || "").slice(0, 90)}
              </div>
              <button
                className="mini-delete"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(n.id);
                }}
                title="Delete"
                aria-label="Delete note"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* CENTER */}
      <main className="center">
        <CreateArea
          key={selectedId || "new"}
          selectedNote={selectedNote}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onCancelEdit={handleCancelEdit}
        />
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="sidebar right">
        <div className="options-card">
          <h3>Note Options</h3>
          <div className="hint">Add font/color controls here later.</div>
        </div>
      </aside>
    </div>
  );
}

export default Main;
