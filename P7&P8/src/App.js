import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./style.css"; // optional for styling

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <div className="maincontent">

      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
