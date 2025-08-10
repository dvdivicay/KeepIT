import React, { useMemo, useState } from "react";
import "./left-sidebar.css";

export default function LeftSidebar({
  notes,
  selectedId,
  setSelectedId,
  showLeft,
  setShowLeft,
  onDelete,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    if (!q) return notes;
    return notes.filter(
      (n) =>
        (n.title || "").toLowerCase().includes(q) ||
        (n.content || "").toLowerCase().includes(q)
    );
  }, [notes, searchQuery]);

  return (
    <aside className="sidebar left">
      {/* Topbar: toggle hides only the list now */}
      <div className="left-topbar">
        <button className="toggle-left" onClick={() => setShowLeft((s) => !s)}>
          {showLeft ? "Hide list" : "Show list"}
        </button>
        <span className="count-badge">{filtered.length}</span>
      </div>

      {/* Search is always visible (not part of toggle) */}
      <div className="sidebar-search sticky">
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="search"
          placeholder="Search notes…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Only this part collapses */}
      <ul className={`preview-list ${showLeft ? "" : "collapsed"}`}>
        {filtered.map((n) => (
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
              className="icon-btn delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(n.id);
              }}
              aria-label="Delete note"
              title="Delete"
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 3h6a1 1 0 0 1 1 1v1h4a1 1 0 1 1 0 2h-1v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7H3a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1zm1 2h4V4h-4v1zM8 7v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7H8zm3 3a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
