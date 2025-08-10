import React from "react";

const FONTS = [
  "'Montserrat', sans-serif",
  "'McLaren', cursive",
  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  "'Georgia', serif",
  "'Courier New', monospace",
];

export default function NoteOptions({ value, onChange }) {
  const { fontFamily, color } = value;

  return (
    <div className="options-card">
      <h3>Note Options</h3>

      <label className="opt-label">Font</label>
      <select
        className="opt-control"
        value={fontFamily}
        onChange={(e) => onChange({ ...value, fontFamily: e.target.value })}
      >
        {FONTS.map((f) => (
          <option key={f} value={f} style={{ fontFamily: f }}>
            {f.replaceAll("'", "")}
          </option>
        ))}
      </select>

      <label className="opt-label">Text color</label>
      <input
        className="opt-control"
        type="color"
        value={color}
        onChange={(e) => onChange({ ...value, color: e.target.value })}
      />

      <div className="preview-chip" style={{ fontFamily, color }}>
        Aa Bb 123 — Sample
      </div>
    </div>
  );
}
