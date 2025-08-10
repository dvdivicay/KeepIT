import React from "react";
import PreviewItem from "./PreviewItem";

export default function LeftSidebar({
  notes,
  selectedId,
  setSelectedId,
  showLeft,
  setShowLeft,
  onDelete,
}) {
  return (
    <aside className="sidebar left">
      <div className="left-topbar">
        <button className="toggle-left" onClick={() => setShowLeft((s) => !s)}>
          {showLeft ? "◀" : "▶"}
        </button>
        {showLeft && <span className="count-badge">{notes.length}</span>}
      </div>

      <ul className="preview-list">
        {notes.map((n) => (
          <PreviewItem
            key={n.id}
            note={n}
            active={selectedId === n.id}
            onSelect={() => setSelectedId(n.id)}
            onDelete={() => onDelete(n.id)}
          />
        ))}
      </ul>
    </aside>
  );
}
