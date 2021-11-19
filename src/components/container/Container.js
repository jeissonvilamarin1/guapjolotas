import React from 'react'
import { Categories } from '../Categories';
import { HeroText } from '../HeroText';
import { SearchBar } from "../SearchBar";


export const Container = ({productos, setProductos}) => {

    return (
      <>

        <HeroText />
        <SearchBar />
        <Categories productos={productos} />
      </>
    );
}
