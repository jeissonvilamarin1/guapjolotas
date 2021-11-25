import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ContainerDiv, LiDetail, NavDetail, UlDetail } from '../styles/Styles';
import { Link } from 'react-router-dom';

export const NavbarDetail = () => {
      return (
        <ContainerDiv>
          <NavDetail>
            <UlDetail>
              <Link to="/">
                <LiDetail>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </LiDetail>
              </Link>
              <Link to="/cart">
                <LiDetail>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </LiDetail>
              </Link>
            </UlDetail>
          </NavDetail>
        </ContainerDiv>
      );
}
