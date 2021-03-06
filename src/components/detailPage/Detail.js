import React from 'react'
import {  useParams } from 'react-router'
import {
  SingleImage,
  SingleProductName,
  SingleProductPrice,
  SingleProduct,
  DivSingleProduct,
  AddToCartBtn,
} from "../../styles/Styles";
import { NavbarDetail } from '../NavbarDetail';
import { DetailCombo } from './DetailCombo';
import { DetailCounter } from './DetailCounter';
import { DetailFlavor } from './DetailFlavor';

export const Detail = ({ productos, carrito, agregarProductoAlCarrito }) => {
  const params = useParams();
  const { id } = params;

  const buscado = productos.find((p) => p.id === Number(id));
  console.log(buscado);

  return (
    <>
      <NavbarDetail />
      <DivSingleProduct className="animate__animated animate__bounceInRight">
        <div>
          <SingleProduct id={buscado.id} key={buscado.id}>
            <SingleImage
              src={buscado.imagen}
              alt={buscado.nombre}
              id={buscado.id}
            />
            <SingleProductName id={buscado.id}>
              {buscado.nombre}
            </SingleProductName>
            <SingleProductPrice>$ {buscado.precio} MXN</SingleProductPrice>
          </SingleProduct>
        </div>
        <DetailCounter buscado={buscado} carrito={carrito} />
        <DetailFlavor productos={productos} />
        <DetailCombo
          productos={productos}
          agregarProductoAlCarrito={agregarProductoAlCarrito}
        />
        <AddToCartBtn onClick={() => agregarProductoAlCarrito(buscado.id)}>
          Agregar al carrito
        </AddToCartBtn>
      </DivSingleProduct>
    </>
  );
};
