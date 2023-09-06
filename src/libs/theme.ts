import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: { paper: "#131313" },
        primary: { main: "#1986EC" },
        grey: {
            "500": "#A0A0A0",
        },
    },
    typography: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
    },
    breakpoints: {
        values: { xl: 1920, lg: 1028, md: 900, sm: 600, xs: 0 },
    },
});

export default theme;
