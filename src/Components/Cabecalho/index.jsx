import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { MAIN_COLOR, TEXT_COLOR } from "../DefaultColors";
import { Logo } from "../../Styled/CommonComponents";

const CabecalhoSection = styled.div`
  background-color: ${MAIN_COLOR};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Button = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${(props) => (props.primary ? MAIN_COLOR : TEXT_COLOR)};
  background: ${(props) => (props.primary ? TEXT_COLOR : "transparent")};
`;

const Cabecalho = () => {
  return (
    <CabecalhoSection>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Button primary href="https://google.com">
          Ajuda
        </Button>
        <Button href="https://google.com">Sair</Button>
      </div>
    </CabecalhoSection>
  );
};

export default Cabecalho;
