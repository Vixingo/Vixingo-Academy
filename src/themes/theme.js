import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#d4af37",
        },
    },

    typography: {
        fontFamily: " Roboto Condensed ",
        h1: {
            fontSize: "40px",

            fontWeight: "700",
            "@media (max-width:600px)": {
                fontSize: "32px",
            },
        },
        h2: {
            fontSize: "32px",
            fontWeight: "700",
            "@media (max-width:600px)": {
                fontSize: "28px",
            },
        },
        h3: {
            fontSize: "28px",
            fontWeight: "600",
            "@media (max-width:600px)": {
                fontSize: "24px",
            },
        },
        h4: {
            fontSize: "24px",
            fontWeight: "600",
        },
        h5: {
            fontSize: "20px",
            fontWeight: "600",
        },
        h6: {
            fontSize: "18px",
            fontWeight: "500",
        },
        subtitle1: {
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
        },
        subtitle2: {
            fontSize: "12px",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
        },
    },
});
