import React, { useState } from "react";
import Modal  from "./Modal";
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

  const [modal, setModal] = useState(false);
  const [productoModal, setProductoModal] = useState([1]);

  const openModal = (id) => {
    setModal(true);
    const productoCarrito = carrito.find((p)=> p.id === Number(id))
    console.log(productoCarrito)
    setProductoModal(productoCarrito)
  }

  const closeModal = () => {
    setModal(true);
  }




  console.log(carrito)
  let total = (carrito).reduce(
    (acc, { cantidad, precio }) => acc + Number(precio*cantidad), 0
  );

  return (
    <div>
      <NavbarDetail />
      <CartTitle>Carrito</CartTitle>
      {carrito.length > 0 ? (
        <Products>
          {carrito.map((p) => (
            <CartProduct
              id={p.id}
              key={p.id}
              onClick={(e) => openModal(e.target.id)}
            >
              <CartImage src={p.imagen} alt={p.nombre} id={p.id} />
              <CartProductInfo id={p.id}>
                <CartProductName id={p.id}>{p.nombre}</CartProductName>
                <CartProductQuantity id={p.id}>
                  {" "}
                  x {p.cantidad}
                </CartProductQuantity>
              </CartProductInfo>
              <CartProductPrice id={p.id}>$ {p.precio} MXN</CartProductPrice>
            </CartProduct>
          ))}
          <CartTotal>
            <CartTotalText>Total</CartTotalText>
            <CartTotalNumber>{`$ ${total} MXN`}</CartTotalNumber>
          </CartTotal>
          {modal ? (
            <Modal
              closeModal={closeModal}
              openModal={openModal}
              productoModal={productoModal}
            />
          ) : null}
        </Products>
      ) : (
        <p>Aun no has agregado productos al carrito</p>
      )}
    </div>
  );
};


