import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
    textStyles: {
        primary: {
            fontFamily: "Source Code Pro",
        },
    },
    styles: {
        global: () => ({
            body: {
                fontFamily: '"Montserrat", sans-serif"',
            },
        }),
    },
});

const AppTheme = extendTheme(overrides);

export default AppTheme;
