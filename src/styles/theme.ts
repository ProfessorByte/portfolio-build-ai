// Theme configuration for our slide presentation
export const theme = {
  colors: {
    background: "#121212",
    surface: "#1E1E1E",
    primary: "#8AB4F8",
    secondary: "#BB86FC",
    accent: "#03DAC6",
    error: "#CF6679",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onAccent: "#000000",
    onError: "#000000",
    elevation1: "#222222",
    elevation2: "#252525",
    elevation3: "#2C2C2C",
    elevation4: "#323232",
    elevationBorder: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    fontFamily: '"Google Sans", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      letterSpacing: "-0.015625em",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "2.125rem",
      fontWeight: 700,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "0.00735em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    extraLarge: "24px",
    circle: "50%",
  },
  shadows: {
    1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export type Theme = typeof theme;
