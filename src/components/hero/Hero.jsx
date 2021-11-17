import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Categories, Container, Image, Paragraph, Product, ProductInfo, ProductName, ProductPrice, Products, Search } from './HeroStyles';


const Hero = () => {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        getData()
    }, [])

    const url = "https://guajolotas-backend.herokuapp.com/productos/";

    const getData = () =>{
        axios
          .get(url)
          .then((response) => setProductos(response.data))

          .catch((error) => console.log(error));
    }


    
    const handleCategory = (e) =>{
        setProductos(productos.filter((p) => (p.categoria === e.target.id)))
        }

    

    return (
      <>
        <Container>
          <Paragraph>Nada como una Guajolota para empezar el día</Paragraph>
          <Search placeholder="Sabor de guajolota, bebida..."></Search>
          <Categories>
            <Button onClick={handleCategory} id="guajolota">
              Guajolotas
            </Button>
            <Button onClick={handleCategory} id="bebidas">
              Bebidas
            </Button>
            <Button onClick={handleCategory} id="tamales">
              Tamales
            </Button>
          </Categories>
        </Container>
        <Products>
          {productos.map((p) => (
            <Product key={p.id}>
              <Image src={p.imagen} alt="" />
              <ProductInfo>
                <ProductName>{p.nombre}</ProductName>
                <ProductPrice>$ {p.precio} MXN</ProductPrice>
              </ProductInfo>
            </Product>
          ))}
        </Products>
      </>
    );
}

export default Hero
