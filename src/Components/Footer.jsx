import { Container, Divider, Stack, Typography } from "@mui/material";

export default function Footer() {
    let CURRENTYEAR = new Date().getFullYear();
    return (
        <Stack
            spacing={2}
            component={Container}
            fixed
            sx={{
                opacity: "0.6",
                cursor: "default",
            }}
        >
            <Divider flexItem />
            <Typography variant="body2">
                This website is a keeper app, a note-taking application that
                allows users to create, edit, and delete notes. It uses ReactJS
                to create the user interface and the functionality of the app.
                ReactJS is a popular JavaScript library for creating user
                interfaces that are fast and dynamic. The website has a simple
                and elegant design.
            </Typography>
            <Typography variant="button">
                <i>Copyright &#169; {CURRENTYEAR}</i>
            </Typography>
        </Stack>
    );
}
