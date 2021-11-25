import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchContainer, SearchDetail, ButtonCancel } from '../styles/Styles';
import {
  Image,
  Product,
  ProductInfo,
  DetailProductName,
  DetailProductPrice,
  Products,
} from "../styles/Styles";

export const SearchPage = ({productos}) => {
      const [search, setSearch] = useState("");

      const searchedValue = productos.filter(
        (p) => p.nombre.toLowerCase().includes(search.toLowerCase())
      );

      const handleSubmit = (e) => {
        e.preventDefault();
        return searchedValue;
      };

      const handleInputChange = (e) => {
        setSearch(e.target.value);
      };

      const handleClick = (e) => {
        console.log("click");
      };

      return (
        <div className="animate__animated animate__fadeInUpBig">
          <SearchContainer>
            <form onSubmit={handleSubmit}>
              <SearchDetail
                placeholder="Sabor de guajolota, bebida..."
                value={search}
                onChange={handleInputChange}
              ></SearchDetail>
            </form>
            <Link to="/">
              <ButtonCancel onClick={handleClick}>Cancelar</ButtonCancel>
            </Link>
          </SearchContainer>
          <Products>
            {searchedValue.map((p) => (
            <Link className="link" to={`/producto/${p.id}`}>
              <Product id={p.id} key={p.id}>
                <Image src={p.imagen} alt={p.nombre} id={p.id} />
                <ProductInfo>
                  <DetailProductName id={p.id}>{p.nombre}</DetailProductName>
                  <DetailProductPrice>$ {p.precio} MXN</DetailProductPrice>
                </ProductInfo>
              </Product>
            </Link>
            ))}
          </Products>
        </div>
      );
}
