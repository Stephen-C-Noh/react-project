import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
// const darkTheme = {
//     textColor: "whitesmoke",
//     backgroundColor: "#111",
// };

// const lightTheme = {
//     textColor: "#111",
//     backgroundColor: "whitesmoke",
// };

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
