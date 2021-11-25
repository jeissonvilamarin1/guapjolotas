import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CategoriesContainer, Search } from '../styles/Styles';
import { SearchPage } from './SearchPage';

export const SearchBar = ({productos}) => {
  
    return (
      <CategoriesContainer>
        <Link to="/search">
          <Search
            placeholder="Sabor de guajolota, bebida..."
          ></Search>
        </Link>
      </CategoriesContainer>
    );
}
