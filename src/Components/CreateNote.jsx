import "./components.css";
import { useState } from "react";

function CreateNote({ NoteList, updateNoteList, setFirstLaunch }) {
    const [newNote, createNewNote] = useState({
        Title: "",
        Content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        createNewNote({ ...newNote, [name]: value });
    }

    function handleClick() {
        if (newNote.Title !== "" && newNote.Content !== "") {
            updateNoteList([...NoteList, newNote]);
            setFirstLaunch(false);
        } else {
            alert("Please enter some text in both fields.");
        }
    }

    return (
        <div className="CreateNote">
            <h1 style={{ color: "rgba(255,255,255,0.8)" }}>
                Create a New Note
            </h1>
            <p>Note Title</p>
            <input
                type="text"
                name="Title"
                value={newNote.Title}
                onChange={handleChange}
            />
            <p style={{ marginBottom: "5px" }}>Note Content</p>
            <textarea
                style={{ resize: "none", height: "100px" }}
                className="NoteContent"
                type="text"
                name="Content"
                value={newNote.content}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleClick}>+</button>
        </div>
    );
}

export default CreateNote;
