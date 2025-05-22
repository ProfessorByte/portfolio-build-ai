import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

interface LayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Preload font to avoid FOUT (Flash of Unstyled Text) during transitions
  React.useEffect(() => {
    const fontPreloader = new FontFace(
      "Google Sans",
      `url('/fonts/GoogleSans-Regular.woff2') format('woff2')`
    );

    fontPreloader
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
      })
      .catch((err) => {
        console.error("Font loading error:", err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
