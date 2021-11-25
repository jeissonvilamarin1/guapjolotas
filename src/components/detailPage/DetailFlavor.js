import React from 'react'
import { useParams } from "react-router";
import {
  ContainerDiv,
  FlavorContainer,
  FlavorImg,
  FlavorTitle,
} from "../../styles/Styles";
export const DetailFlavor = ({productos}) => {
    
    const params = useParams();
    const { id } = params;

    const buscado = productos.find((p) => p.id === Number(id));
    const rebuscado = productos.filter((p) => p.categoria === buscado.categoria)
    console.log(rebuscado)
    return (
      <ContainerDiv>
        <FlavorContainer>
        <FlavorTitle>Sabor</FlavorTitle>
          {rebuscado.map((p) => (
            <FlavorImg src={p.saborUrl} alt={p.sabor} key={p.id} />
          ))}
        </FlavorContainer>
      </ContainerDiv>
    );
}
