import React from "react";
import {
  ComboTitle,
  ComboDescription,
  ComboContainer,
  ContainerDiv,
  ImageCombo,
  ProductCombo,
  ComboProductName,
  ComboProductPrice,
  ProductsCombo,
} from "../../styles/Styles";


export const DetailCombo = ({ productos }) => {
  const bebidas = productos.filter((p) => p.categoria === "bebidas");
  console.log(bebidas);

  return (
    <ContainerDiv>
      <ComboContainer>
        <ComboTitle>Guajolocombo</ComboTitle>
        <ComboDescription>
          Selecciona la bebida que más te guste y disfruta de tu desyuno
        </ComboDescription>
        <ProductsCombo>
          {bebidas.map((p) => (
            <ProductCombo id={p.id} key={p.id}>
              <ImageCombo src={p.imagen} alt={p.nombre} id={p.id} />
              <ComboProductName id={p.id}>{p.nombre}</ComboProductName>
              <ComboProductPrice>+ ${p.precio} MXN</ComboProductPrice>
            </ProductCombo>
          ))}
        </ProductsCombo>
      </ComboContainer>
    </ContainerDiv>
  );
};
