import "./components.css";
import React, { useState } from "react";
import CreateNote from "./CreateNote";
import PrintNotes from "./PrintNotes";

function Note() {
    const [NoteList, updateNoteList] = useState([]);
    console.log(NoteList);
    return (
        <div className="container">
            <CreateNote NoteList={NoteList} updateNoteList={updateNoteList} />
            <PrintNotes NoteList={NoteList} />
        </div>
    );
}

export default Note;
