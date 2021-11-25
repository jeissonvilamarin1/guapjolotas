import React from 'react'
import styled  from 'styled-components'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const Image = styled.img`
        width: 64px;
        height: 64px;
        align-items: left;
        margin: 0;
    `

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Image src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1637104277/samples/logo-guappjolotas_yjuhrv.svg" />
            </li>
            <Link to="/cart">
            <li>
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: "2rem", color: "#0d0d0d70" }}
              />
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar
