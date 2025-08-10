import React from "react";

const TrashIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 3h6a1 1 0 0 1 1 1v1h4a1 1 0 1 1 0 2h-1v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7H3a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1zm1 2h4V4h-4v1zM8 7v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7H8zm3 3a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7z" />
  </svg>
);

function PreviewItem({ note, active, onSelect, onDelete }) {
  return (
    <li
      className={`preview-item ${active ? "active" : ""}`}
      onClick={onSelect}
      title="Click to edit"
    >
      <div className="preview-title">{note.title || "Untitled"}</div>
      <div className="preview-snippet">{(note.content || "").slice(0, 90)}</div>

      <button
        className="icon-btn delete"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        aria-label="Delete note"
        title="Delete"
      >
        <TrashIcon />
      </button>
    </li>
  );
}

export default React.memo(PreviewItem);
