import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 90vh;
  padding: 0px 15vw;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;

export const IconImage = styled.img`
  height: 25px;
  width: 25px;
  filter: ${(props) => props.theme.filter};
`;

export const IconImageMargin = styled(IconImage)`
  margin-top: 2px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.content};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Balance = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

export const Detail = styled.span`
  color: #41d3be;
  font-size: 24px;
`;

export const Button = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const BreakLine = styled.br``;

export const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  padding: 10px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ItemContent = styled.p``;

export const ItemEmphasy = styled.strong``;

export const ItemDetails = styled.p`
  width: 33%;
`;

export const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  filter: ${(props) => props.theme.filter};
`;
