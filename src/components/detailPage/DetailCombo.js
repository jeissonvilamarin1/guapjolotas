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
  ComboCheckbox
} from "../../styles/Styles";


export const DetailCombo = ({ productos, agregarProductoAlCarrito }) => {
  const bebidas = productos.filter((p) => p.categoria === "bebidas");
  console.log(bebidas);

  const handleChecked = (e) =>{
        agregarProductoAlCarrito(Number(e.target.id))
  }

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
              <ComboCheckbox
                id={p.id}
                type="checkbox"
                onChange={handleChecked}
              />
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
