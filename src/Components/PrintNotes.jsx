import "./components.css";
import CheckLaunchStatus from "./CheckFirstLaunch";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function PrintNotes({ NoteList, firstLaunch, updateNoteList }) {
    const [deletedNoteIndex, setDeletedNoteIndex] = useState(null);

    function DeleteNotes(key) {
        setDeletedNoteIndex(key);
        setTimeout(() => {
            updateNoteList((NoteList) => {
                return NoteList.filter((note, index) => {
                    return index != key;
                });
            });
            setDeletedNoteIndex(null);
        }, 200);
    }

    return (
        <div>
            <CheckLaunchStatus firstLaunch={firstLaunch} />
            {NoteList.map((note, index) => (
                <div
                    className={`Note ${
                        deletedNoteIndex === index ? "fade-out" : ""
                    }`}
                    key={index}
                >
                    <h1>{note.Title}</h1>
                    <p>{note.Content}</p>
                    <div style={{ margin: "0", textAlign: "right" }}>
                        <IconButton
                            aria-label="delete"
                            onClick={() => {
                                DeleteNotes(index);
                            }}
                        >
                            <DeleteIcon style={{color: "rgb(40,40,40)"}} />
                        </IconButton>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PrintNotes;
