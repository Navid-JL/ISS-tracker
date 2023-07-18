import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { customTheme } from "./theme/customTheme";
import { ISSProvider } from "./Context/ISSContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
            <ISSProvider>
                <App />
            </ISSProvider>
        </ChakraProvider>
    </React.StrictMode>
);
