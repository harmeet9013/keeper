import "./components.css";

function NewNote(props) {
    return(
        <div className="Note">
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
        </div>
    );
}

export default NewNote;