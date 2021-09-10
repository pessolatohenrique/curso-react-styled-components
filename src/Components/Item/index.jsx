import React from "react";
import {
  Item,
  ItemContent,
  ItemDetails,
  ItemImage,
  ItemEmphasy,
  BreakLine,
} from "../../Styled/CommonComponents";
import alimentacao from "../../assets/images/alimentacao.svg";
import utilidades from "../../assets/images/utilidades.svg";
import saude from "../../assets/images/saude.svg";
import outros from "../../assets/images/outros.svg";

const ItemWrapper = ({ from, value, date, type }) => {
  function verifyImage(type) {
    const availableImages = {
      Restaurante: alimentacao,
      Utilidades: utilidades,
      Saude: saude,
    };
    return availableImages[type] || outros;
  }

  return (
    <Item>
      <ItemImage src={verifyImage(type)} alt={type} />
      <ItemDetails>
        <ItemEmphasy>{from}</ItemEmphasy>
        <BreakLine />
        {value}
      </ItemDetails>
      <ItemContent>{date}</ItemContent>
    </Item>
  );
};

export default ItemWrapper;
