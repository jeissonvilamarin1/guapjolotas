import styled from "styled-components";

export const Paragraph = styled.p`
  display: flexexport;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 34px;
  line-height: 41.15px;
  padding: 1em 0;
  margin: 0 auto;
  width: 312px;
  text-align: left;
`;
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 360px;
`;

export const Search = styled.input`
  border-radius: 30px;
  height: 60px;
  width: 312px;
  font-size: 17px;
  padding-left: 15px;
  margin: 0 auto;
`;

export const CategoriesContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 10px 0;
  margin: 0 auto;
  height: 60px;
  width: 312px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 17px;
  color: #9a9a9d;
  height: 30px;

  &:hover {
    border-bottom: 2px solid #fa4a0c;
    color: #fa4a0c;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 600px;
  margin: 0 auto;
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 312px;
  height: 112px;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
`;
export const SingleProduct = styled.div`
  display: block;
  text-align: center;
  background-color: #f2f2f2;
  width: 312px;
  height: 212px;
  margin: 0 auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ProductName = styled.h3`
  font-size: 17px;
  color: black;
  display: block;
  width: 184px;
  background-color: white;
`;
export const SingleProductName = styled.h3`
  font-size: 28px;
  color: black;
  font-weight: 600;
  display: block;
  text-align: center;
`;

export const ProductPrice = styled.h3`
  font-size: 22px;
  color: #fa4a0c;
  width: 184px;
  background-color: white;
`;

export const SingleProductPrice = styled.h3`
  font-size: 22px;
  color: #fa4a0c;
  font-weight: 600;
`;

export const ProductInfo = styled.h3`
  font-size: 14px;
  color: #fa4a0c;
  width: 184px;
  margin-left: 15px;
  background-color: white;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  align-items: left;
  margin: 0;
  background-color: #f2f2f2;
`;

export const SingleImage = styled.img`
  width: 200px;
  height: 200px;
  align-items: center;
  margin: 0;
  background-color: transparent;
`;

export const ButtonQuantity = styled.button`
  border-radius: 50%;
  border: 3px solid black;
  width: 40px;
  height: 40px;
  font-weight: 900;
  cursor: pointer;
`

export const QuantityContainer = styled.div`
  width: 190px;
  height: 72px;
  display: flex;
  border: 1px solid white;
  border-radius: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
`

export const Quantity = styled.h2`
  padding: 10px 20px;
  background-color: white;
`;

export const FlavorContainer = styled.div`
  width: 310px;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const FlavorImg = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  background-color: transparent;
`;

export const FlavorTitle = styled.h2`
  width: 100%;
  font-weight: 700;
  height: auto;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 20px;
  padding: 5px;
`;

export const ProductsCombo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 312px;
  height: auto;
  margin: 0 auto;
`;

export const ComboContainer = styled.div`
  width: 310px;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const ComboTitle = styled.h2`
  width: 100%;
  font-weight: 700;
  height: auto;
  cursor: pointer;
  
`;

export const ComboDescription = styled.p`
  width: 100%;
  height: auto;
  font-weight: 600;
  color: rgba(13, 13, 13, 0.5);
`;

export const ProductCombo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background-color: white;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  padding-left: 25px;
  position: relative;
`;


export const ImageCombo = styled.img`
  width: 60px;
  height: 60px;
  align-items: left;
  margin: 20px 0;
  background-color: #f2f2f2;
`;

export const ComboProductName = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: black;
  display: block;
  background-color: white;
  padding: 0;
  margin-bottom: 5px;
`;

export const ComboProductPrice = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: #fa4a0c;
  background-color: white;
`;

export const NavDetail = styled.nav`
  display: flex;
  width: 360px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(13, 13, 13, 0.5);
  margin: 0;
  padding: 0;
`;
export const UlDetail = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 20px;
  padding: 0;
`;
export const LiDetail = styled.li`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-space-between;
  align-items: center;
  margin: 40px auto;
  height: 60px;
  width: 312px;
`;

export const SearchDetail = styled.input`
  border-radius: 30px;
  height: 60px;
  width: 220px;
  font-size: 17px;
  padding: 15px;
  margin-right: 20px;
  margin: 0 auto;
`;

export const ButtonCancel = styled.button`
  border: none;
  font-weight: 700;
  margin-left: 10px;
`
export const DetailProductName = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: black;
  display: block;
  width: 184px;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const DetailProductPrice = styled.h3`
  font-size: 14px;
  color: #fa4a0c;
  width: 184px;
  background-color: white;
`;

export const DivSingleProduct = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
`;

export const AddToCartBtn = styled.button`
  width: 312px;
  height: 70px;
  font-size: 17px;
  font-weight: 500;
  background-color: rgba(250, 74, 12, 1);
  color: white;
  border-radius: 40px;
  text-align: center;
  margin-left: 20px;
`;




export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  height: 70px;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`;


export const CartProductName = styled.h3`
  font-size: 15px;
  color: black;
  display: block;
  width: auto;

`;


export const CartProductPrice = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #fa4a0c;
  width: 100px;
  display: block;

`;

export const CartProductInfo = styled.div`
  font-size: 14px;
  color: #fa4a0c;
  width: 150px;
  margin-left: 15px;
  text-align: left;
`;

export const CartImage = styled.img`
  width: 60px;
  height: 60px;
  align-items: left;
  margin: 0;
  background-color: #f2f2f2;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  height: 50px;
  border-radius: 20px;
  background-color: white;
  padding: 2px 15px;
`;
export const CartTotalText = styled.h3`
  background-color: white;
  font-size: 19px;
  font-weight: 700;
`;
export const CartTotalNumber = styled.h3`
  background-color: white;
  font-size: 19px;
  font-weight: 600;
  color: #fa4a0c;
`;

export const CartTitle = styled.h2`
  position: absolute;
  top: 40px;
  right: 40%;
  font-size: 19px;
  font-weight: 600;
  text-align: center;
`;