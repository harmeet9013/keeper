import "./components.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

export default function CreateNote({
    NoteList,
    updateNoteList,
    setFirstLaunch,
}) {
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
            <TextField
                label="Note Title"
                variant="filled"
                sx={{
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "350px",
                    input: {
                        letterSpacing: "2px",
                        fontWeight: "600",
                    },
                }}
                margin="dense"
                type="text"
                name="Title"
                placeholder="An interesting title"
                value={newNote.Title}
                onChange={handleChange}
            />
            <TextField
                label="Note Content"
                variant="filled"
                margin="normal"
                multiline="true"
                rows={4}
                sx={{
                    color: "black",
                    backgroundColor: "white",
                    letterSpacing: "1px",
                    fontWeight: "500",
                    width: "350px",
                    borderRadius: "10px",
                }}
                type="text"
                name="Content"
                placeholder="Don't write I got your back jack."
                value={newNote.content}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleClick}>
                <AddIcon />
            </button>
        </div>
    );
}
