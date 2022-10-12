import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleNote, handleDelete }) => {
  return (
    <div className="noteslist">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleAddNote={handleNote} />
    </div>
  );
};

export default NotesList;
