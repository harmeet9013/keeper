import React, { useState } from "react";
import Heading from "./Components/Heading";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
    blue,
    blueGrey,
    deepPurple,
    lightBlue,
    lightGreen,
} from "@mui/material/colors";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    const CssBaselineStyles = {
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {},
                    body: {
                        margin: "0",
                        width: "100%",
                        textAlign: "center",
                        justfifyContent: "center",
                        alignItems: "center",
                        transition: "all 0.2s ease-in",
                    },
                },
            },
        },
    };

    const lightTheme = createTheme({
        palette: {
            mode: "light",
            accent: {
                primary: blue[300],
            },
            background: {
                createNote: "#e1e3ff",
            },
            textField: {
                main: blueGrey[700],
            },
        },
        ...CssBaselineStyles,
    });

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            accent: {
                primary: blue[700],
            },
            background: {
                createNote: "#191b29",
            },
            textField: {
                main: blueGrey[300],
            },
        },
        ...CssBaselineStyles,
    });

    const customTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Heading darkMode={darkMode} setDarkMode={setDarkMode} />
            <Note />
            <Footer />
        </ThemeProvider>
    );
}
