import "./components.css";
import React, { useState } from "react";
import CreateNote from "./CreateNote";
import PrintNotes from "./PrintNotes";

export default function Note() {
    const [NoteList, updateNoteList] = useState([]);
    const [firstLaunch, setFirstLaunch] = useState(true);
    return (
        <div className="container">
            <CreateNote
                NoteList={NoteList}
                updateNoteList={updateNoteList}
                firstLaunch={firstLaunch}
                setFirstLaunch={setFirstLaunch}
            />
            <PrintNotes
                NoteList={NoteList}
                firstLaunch={firstLaunch}
                updateNoteList={updateNoteList}
            />
        </div>
    );
}
