import React from "react";
import "./note.css";

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <button
        className="delete-btn"
        aria-label="Delete note"
        title="Delete"
        onClick={() => onDelete(id)}
      >
        ✕
      </button>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Note;
