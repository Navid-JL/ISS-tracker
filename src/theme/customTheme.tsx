import "@fontsource/orbitron";
import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    fonts: {
        heading: "Orbitron, sans-serif",
        body: "Orbitron,system-ui, sans-serif",
    },
    styles: {
        global: {
            "::-webkit-scrollbar": {
                width: "8px",
            },
            "::-webkit-scrollbar-track": {
                backgroundColor: "gray.100",
            },
            "::-webkit-scrollbar-thumb": {
                backgroundColor: "gray.500",
                borderRadius: "8px",
            },
        },
    },
});
