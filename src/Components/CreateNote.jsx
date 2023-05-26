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
                    input: {
                        color: "black",
                        backgroundColor: "white",
                        letterSpacing: "2px",
                        fontWeight: "600",
                        width: "350px",
                        borderRadius: "10px",
                    },
                    hover: {
                        borderRadius: "10px",
                    },
                }}
                margin="dense"
                type="text"
                name="Title"
                value={newNote.Title}
                onChange={handleChange}
            />
            <TextField
                label="Note Content"
                variant="filled"
                multiline="true"
                rows={5}
                margin="normal"
                sx={{
                    input: {
                        color: "black",
                        backgroundColor: "white",
                        letterSpacing: "2px",
                        fontWeight: "600",
                    },
                }}
                type="text"
                name="Content"
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
