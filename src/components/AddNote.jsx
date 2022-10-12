import React, { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [newNote, setNewNote] = useState("");

  const CharacterLimit = 200;

  const handleChange = (e) => {
    if(CharacterLimit - e.target.value.length >= 0){
      setNewNote(e.target.value);
    }
  };

  const handleSave = () => {
    if(newNote.trim().length > 0){
      handleAddNote(newNote);
      setNewNote("")
    }
  }

  return (
    <div className="note new">
      <textarea
        name="AddNote"
        id=""
        cols="10"
        rows="8"
        value={newNote}
        placeholder="type new note ...."
        onChange={handleChange}
      ></textarea>
      <div className="note_footer">
        <small>{CharacterLimit - newNote.length} Remaining</small>
        <button className="save_btn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
