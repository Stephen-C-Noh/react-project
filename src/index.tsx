import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
// const darkTheme = {
//     textColor: "whitesmoke",
//     backgroundColor: "#111",
// };

// const lightTheme = {
//     textColor: "#111",
//     backgroundColor: "whitesmoke",
// };

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={DarkTheme}>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
