import "./components.css";

function PrintNotes({ NoteList }) {
    return (
        <div>
            {NoteList.map((note) => (
                <div className="Note" key={note.Title}>
                    <h1>{note.Title}</h1>
                    <p>{note.Content}</p>
                </div>
            ))}
        </div>
    );
}

export default PrintNotes;
