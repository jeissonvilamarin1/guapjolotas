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

  const getData = () => {
    axios.get(url)
    .then((response) => setProductos(response.data))
    .catch((error) => console.log(error));
  
  };
  
  useEffect(() => {
    getData();
  }, []);

const [carrito, cambiarCarrito] = useState([]);

const agregarProductoAlCarrito = (idProductoAAgregar) => {

  const buscado = productos.find(p => p.id === idProductoAAgregar)
  if (carrito.length === 0) {
    cambiarCarrito([buscado]);
    console.log(carrito)
  } 
  else {
    const nuevoCarrito = [...carrito];

    const yaEstaEnCarrito =nuevoCarrito.filter((productoDeCarrito) => {
        return productoDeCarrito.id === idProductoAAgregar;
    }).length > 0;

    if (yaEstaEnCarrito) {
      nuevoCarrito.forEach((productoDeCarrito, index) => {
        if (productoDeCarrito.id === idProductoAAgregar) {
          buscado.cantidad = buscado.cantidad + 1;
        }
      });

    } else {
      nuevoCarrito.push(buscado);
    }

    cambiarCarrito(nuevoCarrito);
  }
};

/*   localStorage.setItem("carrito", JSON.stringify([])); 

  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );

  localStorage.setItem("carrito", JSON.stringify(carrito));
 */
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
                agregarProductoAlCarrito={agregarProductoAlCarrito}
              />
            }
          />
          <Route
            path="/search"
            element={<SearchPage productos={productos} />}
          />
          <Route
            path="/cart"
            element={<Cart carrito={carrito} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

