import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export const theme = createTheme({
    components:{
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: "black",
                    backgroundColor: "white",
                    letterSpacing: "2px",
                    fontWeight: "600",
                    width: "350px",
                    borderRadius: "10px"
                }
            }
        }
    },
})