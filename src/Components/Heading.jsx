import { Button, Stack, Typography, styled } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function Heading({ darkMode, setDarkMode }) {
    const ThemeButton = styled(Button)(({ theme }) => ({
        borderRadius: "15px",
        fontSize: "18px",
        padding: "15px 10px",
        backgroundColor: theme.palette.action.disabled,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.accent.primary,
        },
    }));

    const CustomStack = styled(Stack)(({ theme }) => ({
        backgroundColor: "#283a4e",
        padding: "50px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }));

    const MyText = styled(Typography)(({ theme }) => ({
        color: "white",
    }));

    return (
        <CustomStack direction="row" spacing={2}>
            <Stack
                direction="column"
                spacing={0}
                sx={{
                    cursor: "default",
                }}
            >
                <MyText variant="h2">
                    <strong>Keeper</strong>
                </MyText>
                <MyText variant="button">
                    <i>Created by Harmeet Singh</i>
                </MyText>
            </Stack>

            <ThemeButton
                onClick={() => {
                    setDarkMode((prevMode) => !prevMode);
                }}
            >
                {darkMode ? <DarkMode /> : <LightMode />}
            </ThemeButton>
        </CustomStack>
    );
}
