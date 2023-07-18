import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
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
