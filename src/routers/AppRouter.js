import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { url } from '../helpers/url';
import { Container } from '../components/container/Container'
import { Detail } from '../components/detailPage/Detail';

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


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container productos={productos} />} />
          <Route path="/producto/:id" element={<Detail detalle={productos} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

