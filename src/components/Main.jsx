import React from 'react';
import notes from '../notes';
import Note from './Note';

function createNote(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function Main() {
  return (
    <div className="main">
      {notes.map(createNote)}
    </div>
  );
}

export default Main;
