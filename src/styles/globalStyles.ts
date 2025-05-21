import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Google Sans';
    src: url('/src/fonts/GoogleSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    color: ${theme.colors.onBackground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: ${theme.transitions.default};
    line-height: 1.5;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    position: fixed;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: ${theme.typography.h1.fontWeight};
    letter-spacing: -0.02em;
    margin-bottom: ${theme.spacing(1.5)};
    
    @media (min-width: 768px) {
      font-size: 3.5rem;
      margin-bottom: ${theme.spacing(2)};
      letter-spacing: ${theme.typography.h1.letterSpacing};
    }
    
    @media (min-width: 1024px) {
      font-size: ${theme.typography.h1.fontSize};
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: ${theme.typography.h2.fontWeight};
    letter-spacing: -0.01em;
    margin-bottom: ${theme.spacing(1.25)};
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: ${theme.spacing(1.5)};
      letter-spacing: ${theme.typography.h2.letterSpacing};
    }
    
    @media (min-width: 1024px) {
      font-size: ${theme.typography.h2.fontSize};
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: ${theme.typography.h3.fontWeight};
    letter-spacing: 0;
    margin-bottom: ${theme.spacing(1)};
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: ${theme.spacing(1.25)};
      letter-spacing: ${theme.typography.h3.letterSpacing};
    }
    
    @media (min-width: 1024px) {
      font-size: ${theme.typography.h3.fontSize};
    }
  }

  p {
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    letter-spacing: ${theme.typography.body1.letterSpacing};
    margin-bottom: ${theme.spacing(1)};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.fast};
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.button.fontSize};
    font-weight: ${theme.typography.button.fontWeight};
    letter-spacing: ${theme.typography.button.letterSpacing};
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    transition: ${theme.transitions.fast};
    
    &:focus {
      outline: none;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.elevation4};
    border-radius: ${theme.borderRadius.small};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.elevation3};
  }
`;
