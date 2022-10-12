import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/searchBar/search";
import Header from "./components/Header/Header";

const App = () => {
  const [notes, newNotes] = useState([
    {
      id: nanoid(),
      text: "first box",
      date: "12/11/2021",
    },
    {
      id: nanoid(),
      text: "second box",
      date: "10/10/2022",
    },
    {
      id: nanoid(),
      text: "third box",
      date: "22/12/2000",
    },
  ]);

  const [SearchText, SetSearchText] = useState("");

  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedItems) {
      newNotes(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newList = [...notes, newNote];
    newNotes(newList);
  };

  const deleteNote = (id) => {
    const newList = notes.filter((note) => note.id !== id);
    newNotes(newList);
  };

  const toggle = DarkMode ? "dark" : "";

  return (
    <div className={toggle}>
      <div className="container">
        <Header handleToggle={setDarkMode} />
        <Search handleSearch={SetSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(SearchText)
          )}
          handleNote={addNote}
          handleDelete={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
