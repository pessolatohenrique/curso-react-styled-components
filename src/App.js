import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styled/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { Logo, IconImage } from "./Styled/CommonComponents";
import { THEME_DARK, THEME_LIGHT } from "./Styled/Themes";
import ThemeOn from "./assets/images/themeOn.svg";

const ToggleButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;

function App() {
  function toggleTheme() {
    const inversedTheme = !theme;
    setTheme(inversedTheme);
  }

  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? THEME_DARK : THEME_LIGHT}>
      <GlobalStyle />
      <ToggleButton onClick={toggleTheme}>
        <IconImage src={ThemeOn} alt="Alternar tema" />
      </ToggleButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
