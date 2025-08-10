import { useEffect, useMemo, useState, useCallback } from "react";
import notesData from "../notes";

export default function useNotes() {
  const [notes, setNotes] = useState([]);
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

  // persist
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const selectedNote = useMemo(
    () => notes.find((n) => n.id === selectedId) || null,
    [notes, selectedId]
  );

  const addNote = useCallback((note) => {
    const title = (note.title || "").trim();
    const content = (note.content || "").trim();
    if (!title && !content) return;
    const withId = { id: Date.now(), title, content };
    setNotes((prev) => [withId, ...prev]);
    setSelectedId(withId.id);
  }, []);

  const updateNote = useCallback((updated) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === updated.id ? { ...n, ...updated } : n))
    );
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    setSelectedId((curr) => (curr === id ? null : curr));
  }, []);

  const cancelEdit = useCallback(() => setSelectedId(null), []);

  return {
    notes,
    selectedId,
    selectedNote,
    setSelectedId,
    addNote,
    updateNote,
    deleteNote,
    cancelEdit,
  };
}
