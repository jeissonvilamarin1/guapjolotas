import React from "react";
import {
  CartProduct,
  Products,
  CartImage,
  CartProductInfo,
  CartProductName,
  CartProductPrice,
  CartTotal,
  CartTotalText,
  CartTotalNumber,
  CartTitle,
  CartProductQuantity
} from "../styles/Styles";
import { NavbarDetail } from "./NavbarDetail";

export const Cart = ({ carrito }) => {
  console.log(carrito)
  let total = (carrito).reduce(
    (acc, { cantidad, precio }) => acc + Number(precio*cantidad), 0
  );

  return (
    <div>
      <NavbarDetail/>
      <CartTitle>Carrito</CartTitle>
      {carrito.length > 0 ? (
            <Products>
              {carrito.map((p) => (
                <CartProduct id={p.id} key={p.id}>
                  <CartImage src={p.imagen} alt={p.nombre} id={p.id} />
                  <CartProductInfo>
                    <CartProductName id={p.id}>{p.nombre}</CartProductName>
                    <CartProductQuantity> x {p.cantidad}</CartProductQuantity>
                  </CartProductInfo>
                  <CartProductPrice>$ {p.precio} MXN</CartProductPrice>
                </CartProduct>
              ))}
              <CartTotal>
                <CartTotalText>Total</CartTotalText>
                <CartTotalNumber>{`$ ${total} MXN`}</CartTotalNumber>
              </CartTotal>
            </Products>
        ) 
        : 
        (
        <p>Aun no has agregado productos al carrito</p>
        )
      }
    </div>
  );
};


