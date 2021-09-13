import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styled/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { THEME_DARK } from "./Styled/Themes";

function App() {
  return (
    <ThemeProvider theme={THEME_DARK}>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
