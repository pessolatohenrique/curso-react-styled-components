import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import { Container, Content } from "../../Styled/CommonComponents";

const ContainerWrapper = () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Conta />
      </Content>
    </Container>
  );
};

export default ContainerWrapper;
