import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoriesContainer, Button } from "../styles/Styles";
import {
  Image,
  Product,
  ProductInfo,
  ProductName,
  ProductPrice,
  Products,
} from "../styles/Styles";


export const Categories = ({productos}) => {

  let filter = productos

  const [state, setState] = useState(filter);

  const handleClick = (e) =>{
    filter = productos.filter(p =>p.categoria === e.target.id)
    setState(filter)
  }

  return (
    <>
      <CategoriesContainer>
        <Button id="guajolota" onClick={handleClick}>
          Guajolotas
        </Button>
        <Button id="bebidas" onClick={handleClick}>
          Bebidas
        </Button>
        <Button id="tamales" onClick={handleClick}>
          Tamales
        </Button>
      </CategoriesContainer>
      <Products>
        {state.map((p) => (
          <Link to={`/producto/${p.id}`}>
            <Product id={p.id} key={p.id}>
              <Image src={p.imagen} alt={p.nombre} id={p.id} />
              <ProductInfo>
                <ProductName id={p.id}>{p.nombre}</ProductName>
                <ProductPrice>$ {p.precio} MXN</ProductPrice>
              </ProductInfo>
            </Product>
          </Link>
        ))}
      </Products>
    </>
  );
};
