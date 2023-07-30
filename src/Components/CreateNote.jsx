import { useState } from "react";
import {
    Button,
    Divider,
    Paper,
    Typography,
    styled,
    useMediaQuery,
    TextField,
    Box,
    Stack,
} from "@mui/material";
import { Add } from "@mui/icons-material";

let isMobile;

const MyStack = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.background.createNote,
    padding: isMobile ? "20px" : "30px 50px",
    width: isMobile ? "90%" : "30rem",
    borderRadius: "15px",
    gap: "20px",
    transition: "all 0.2s ease-in",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "default",
    marginTop: "2rem",
}));

const AddButton = styled(Button)(({ theme }) => ({
    padding: "8px 16px",
    fontWeight: "600",
    fontSize: "18px",
    borderRadius: "15px",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    transition: "all 0.2s ease-in",
    border: `1px solid ${theme.palette.text.disabled}`,
    "&:hover": {
        backgroundColor: theme.palette.accent.primary,
    },
}));

export default function CreateNote({
    NoteList,
    updateNoteList,
    setFirstLaunch,
    setDialogInputs,
}) {
    isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [newNote, createNewNote] = useState({
        Title: "",
        Content: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        createNewNote((prevInputs) => {
            return { ...prevInputs, [name]: value };
        });
    };

    const handleSubmit = () => {
        if (newNote.Title !== "" && newNote.Content !== "") {
            updateNoteList([...NoteList, newNote]);
            setFirstLaunch(false);
        } else {
            setDialogInputs({
                open: true,
                title: "Invalid Inputs",
                content: "Please enter some text in both fields.",
            });
        }
    };

    return (
        <MyStack spacing={0} component={Paper} elevation={4}>
            <Typography variant={isMobile ? "h5" : "h4"}>
                <strong>Create a New Note</strong>
            </Typography>
            <TextField
                label="Title"
                variant="outlined"
                type="text"
                fullWidth
                color="textField"
                name="Title"
                placeholder="An interesting title"
                value={newNote.Title}
                onChange={handleChange}
            />
            <TextField
                label="Content"
                variant="outlined"
                color="textField"
                type="text"
                fullWidth
                multiline
                minRows={4}
                name="Content"
                placeholder="Don't write I got your back jack."
                value={newNote.Content}
                onChange={handleChange}
            />
            <Divider flexItem />
            <AddButton onClick={handleSubmit} startIcon={<Add />}>
                Save Note
            </AddButton>
        </MyStack>
    );
}
