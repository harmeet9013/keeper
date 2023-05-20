import "./components.css";
import NoteJS from "./notes";
import CreateNote from "./CreateNote";

function Note() {
    // return NoteJS.map((inputs) => (
    //     <CreateNote Title={inputs.title} Content={inputs.content} />
    // ));

    const [inputText, setInputText] = useState("");
    return (
        <div>
            <label>Note Title
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputText}
                    className=".TitleField"
                />
            </label>
            <p>Your input: {inputText}</p>
        </div>
    );
}

export default Note;
