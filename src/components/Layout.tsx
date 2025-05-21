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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
