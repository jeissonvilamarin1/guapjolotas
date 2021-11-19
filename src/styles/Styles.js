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
  width: 360px;
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
  text-
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
  text
`;