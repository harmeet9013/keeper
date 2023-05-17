import "./components.css";
import { useRef } from "react";
import CreateNote from "./CreateNote";

function Call_CreateNote(NoteTitle, NoteContent) {
    return <CreateNote Title={NoteTitle} Content={NoteContent} />;
}

function Note() {
    let NoteTitle = useRef(null);
    let NoteContent = useRef(null);
    return (
        <div className="Note">
            <input
                ref={NoteTitle}
                placeholder="Note Title."
                id="NoteTitle"
                className="TitleField"
            />
            <input
                ref={NoteContent}
                placeholder="Note Content."
                id="NoteContent"
                className="ContentField"
            />
            <button
                onClick={() =>
                    Call_CreateNote(
                        NoteTitle.current.value,
                        NoteContent.current.value
                    )
                }
            >
                {" "}
                Create Note{" "}
            </button>
        </div>
    );
}

export default Note;
