import { createTheme } from "@mui/material";

interface CustomBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  lgPlus: number;
}

const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    fontFamily: 'Drummer, sans-serif'
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Drummer, Sans-serif",
          fontWeight: '800'
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused fieldset": {
            border: "transparent",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: "#202020",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #B88746 0%, #FDF5A6 100%)",
          width: "max-content",
          color: "#191919",
          fontFamily: "Poppins",
          padding: "12px 24px",
          borderRadius: "10px",
          fontWeight: "700",
          transition: "all 0.2s ease-in-out",
          fontSize: "0.875rem",
          border: "1px solid #B88746",
          "&:hover": {
            border: "1px solid #B88746",
            background: "rgba(0,0,0,0)",
            color: "#B88746",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1601,
      lgPlus: 1300,
    } as CustomBreakpoints,
  },
});

const siderBarWidth = 110;
const siderBarLeftMargin = 45;

export { defaultTheme, siderBarWidth, siderBarLeftMargin };
