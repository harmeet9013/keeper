import { useState } from "react";
import {
    Button,
    Divider,
    Grow,
    Paper,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function PrintNotes({
    NoteList,
    firstLaunch,
    setFirstLaunch,
    updateNoteList,
}) {
    const [transition, setTransition] = useState(true);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    function DeleteNotes(key) {
        setTransition(false);

        setTimeout(() => {
            updateNoteList((NoteList) => {
                return NoteList.filter((note, index) => {
                    return index != key;
                });
            });
            setTransition(true);
            if (NoteList.length < 2) {
                setFirstLaunch(true);
            }
        }, 200);
    }

    const CustomNote = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.divider,
        borderRadius: "15px",
        padding: "20px",
        width: isMobile ? "100%" : "30rem",
        justifyContent: "center",
        alignItems: "center",
    }));

    const DeleteButton = styled(Button)(({ theme }) => ({
        borderRadius: "15px",
        color: theme.palette.text.primary,
        transition: "all 0.2s ease-in",
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));

    return firstLaunch ? (
        <Grow in={true}>
            <Typography
                variant="h2"
                sx={{
                    cursor: "default",
                }}
            >
                <strong>Create some notes!</strong>
            </Typography>
        </Grow>
    ) : (
        <Stack
            direction={isMobile ? "column" : "row"}
            spacing={4}
            useFlexGap
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            padding="20px 50px 20px 50px"
        >
            {NoteList.map((note, index) => (
                <Grow in={transition} key={index}>
                    <CustomNote elevation={2} component={Stack} spacing={1}>
                        <Typography variant="h6" gutterBottom noWrap>
                            {note.Title}
                        </Typography>
                        <Divider flexItem />
                        <Typography
                            variant="body1"
                            sx={{ wordBreak: "break-word" }}
                        >
                            {note.Content}
                        </Typography>

                        <DeleteButton
                            onClick={() => {
                                DeleteNotes(index);
                            }}
                        >
                            <Delete /> Delete
                        </DeleteButton>
                    </CustomNote>
                </Grow>
            ))}
        </Stack>
    );
}
