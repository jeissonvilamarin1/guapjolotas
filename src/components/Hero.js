
import React from 'react';
import { Image, Product, ProductInfo, ProductName, ProductPrice, Products } from '../styles/Styles';


const Hero = ({productos}) => {

    return (
      <>
        <Products>
          {productos.map((p) => (
            <Product id={p.id} key={p.id}>
              <Image src={p.imagen} alt={p.nombre} id={p.id} />
              <ProductInfo>
                <ProductName id={p.id}>{p.nombre}</ProductName>
                <ProductPrice>$ {p.precio} MXN</ProductPrice>
              </ProductInfo>
            </Product>
          ))}
        </Products>
      </>
    );
}

export default Hero
