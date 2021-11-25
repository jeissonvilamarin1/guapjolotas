import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { url } from '../helpers/url';
import { Container } from '../components/container/Container'
import { Detail } from '../components/detailPage/Detail';
import { SearchPage } from '../components/SearchPage';
import { Cart } from '../components/Cart';

export const AppRouter = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(url)
         .then((response) => setProductos(response.data))
         .catch((error) => console.log(error));
  };
  
  localStorage.setItem("carrito", JSON.stringify([])); 

  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );

  localStorage.setItem("carrito", JSON.stringify(carrito));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container productos={productos} />} />
          <Route
            path="/producto/:id"
            element={
              <Detail
                productos={productos}
                carrito={carrito}
                setCarrito={setCarrito}
              />
            }
          />
          <Route
            path="/search"
            element={<SearchPage productos={productos} />}
          />
          <Route
            path="/cart"
            element={<Cart carrito={carrito} setCarrito={setCarrito} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

