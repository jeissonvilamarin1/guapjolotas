import React from 'react'
import { SingleProduct, SingleProductName, SingleProductPrice, SingleImage } from '../styles/Styles';

const Modal = ({openModal, closeModal, productoModal}) => {
  console.log(productoModal);

  return (
    <>
      <div>
          <SingleProduct id={productoModal.id} key={productoModal.id}>
            <SingleImage
              src={productoModal.imagen}
              alt={productoModal.nombre}
              id={productoModal.id}
            />
            <SingleProductName id={productoModal.id}>
              {productoModal.nombre}
            </SingleProductName>
            <SingleProductPrice>$ {productoModal.precio} MXN</SingleProductPrice>
          </SingleProduct>
        </div>
    </>
  );
};

export default Modal
