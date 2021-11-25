import React from 'react'
import { Categories } from '../Categories';
import { HeroText } from '../HeroText';
import { SearchBar } from "../SearchBar";
import { Navbar } from "../Navbar";


export const Container = ({productos, setProductos}) => {

    return (
      <>
        <Navbar/>
        <HeroText />
        <SearchBar productos={productos} />
        <Categories productos={productos} />
      </>
    );
}
