import React from "react";
import { Box, Button } from "../../Styled/CommonComponents";
import ItemWrapper from "../Item";
import { extratoLista } from "../../info";

const Extrato = () => {
  return (
    <Box>
      <h2>Extrato</h2>

      {[...extratoLista.updates].map((item) => (
        <ItemWrapper {...item} />
      ))}

      <Button>Ver mais</Button>
    </Box>
  );
};

export default Extrato;
