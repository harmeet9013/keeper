import { useState } from "react";
import {
    Stack,
    Dialog,
    Paper,
    DialogActions,
    Button,
    Divider,
    Typography,
    styled,
} from "@mui/material";

import CreateNote from "./CreateNote";
import PrintNotes from "./PrintNotes";
import { CancelRounded } from "@mui/icons-material";

export default function Note() {
    const [NoteList, updateNoteList] = useState([]);
    const [firstLaunch, setFirstLaunch] = useState(true);
    const [dialogInputs, setDialogInputs] = useState({
        open: false,
        title: "",
        content: "",
    });

    const DialogButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.action.disabled,
        color: "white",
        padding: "8px 16px",
        borderRadius: "15px",
        transition: "all 0.2s ease",
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));

    const handleDialogClose = () => {
        setDialogInputs({
            open: false,
            title: "",
            content: "",
        });
    };

    return (
        <Stack
            direction="column"
            spacing={4}
            justifyContent="center"
            alignItems="center"
        >
            <Dialog
                open={dialogInputs.open}
                PaperProps={{
                    component: Paper,
                    elevation: 1,
                    sx: {
                        borderRadius: "15px",
                        padding: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px",
                    },
                }}
            >
                <Typography variant="h4">{dialogInputs.title}</Typography>
                <Divider
                    flexItem
                    sx={{
                        borderColor: (theme) => theme.palette.text.secondary,
                    }}
                />
                <Typography variant="h6">{dialogInputs.content}</Typography>
                <DialogActions>
                    <DialogButton
                        onClick={handleDialogClose}
                        startIcon={<CancelRounded />}
                    >
                        Okay
                    </DialogButton>
                </DialogActions>
            </Dialog>
            <CreateNote
                NoteList={NoteList}
                updateNoteList={updateNoteList}
                firstLaunch={firstLaunch}
                setFirstLaunch={setFirstLaunch}
                setDialogInputs={setDialogInputs}
            />
            <PrintNotes
                NoteList={NoteList}
                firstLaunch={firstLaunch}
                setFirstLaunch={setFirstLaunch}
                updateNoteList={updateNoteList}
            />
        </Stack>
    );
}
