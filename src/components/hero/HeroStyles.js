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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Search = styled.input`
  border-radius: 30px;
  height: 60px;
  width: 312px;
  font-size: 17px;
  padding-left: 15px;
  margin: 0 auto;
`;

export const Categories = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 10px 0;
  height: 60px;
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
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const ProductName = styled.h3`
  font-size: 17px;
  color: black;
  display: block;
  width: 184px;
  background-color: white;
`;

export const ProductPrice = styled.h3`
  font-size: 14px;
  color: #fa4a0c;
  width: 184px;
  background-color: white;
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
`;
