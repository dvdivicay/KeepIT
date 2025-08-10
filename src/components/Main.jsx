import React, { useState } from "react";
import useNotes from "../hooks/useNotes";
import CreateArea from "./CreateArea";
import LeftSidebar from "./LeftSidebar";
import RightOptions from "./RightOptions";

function Main() {
  const [showLeft, setShowLeft] = useState(true);

  const {
    notes,
    selectedId,
    selectedNote,
    setSelectedId,
    addNote,
    updateNote,
    deleteNote,
    cancelEdit,
  } = useNotes();

  return (
    <div className={`layout ${showLeft ? "" : "left-collapsed"}`}>
      <LeftSidebar
        notes={notes}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        showLeft={showLeft}
        setShowLeft={setShowLeft}
        onDelete={deleteNote}
      />

      <main className="center">
        <CreateArea
          key={selectedId || "new"}
          selectedNote={selectedNote}
          onAdd={addNote}
          onUpdate={updateNote}
          onCancelEdit={cancelEdit}
        />
      </main>

      <RightOptions />
    </div>
  );
}

export default Main;
