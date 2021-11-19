import React from 'react'
import {  useParams } from 'react-router'
import {
  SingleImage,
  SingleProductName,
  SingleProductPrice,
  SingleProduct,
  ButtonQuantity,
  QuantityContainer,
  Quantity,
} from "../../styles/Styles";

export const Detail = ({detalle}) => {

    // const navegar = useNavigate()

    const params = useParams();
    const {id} = params;

    const buscado = detalle.find(p => p.id === Number(id));
    console.log(buscado)

    return (
      <div>
        <div>
          <SingleProduct id={buscado.id} key={buscado.id}>
            <SingleImage src={buscado.imagen} alt={buscado.nombre} id={buscado.id} />
              <SingleProductName id={buscado.id}>{buscado.nombre}</SingleProductName>
              <SingleProductPrice>$ {buscado.precio} MXN</SingleProductPrice>
          </SingleProduct>
        </div>
        <div>
          <QuantityContainer>
              <ButtonQuantity>-</ButtonQuantity>
              <Quantity>1</Quantity>
              <ButtonQuantity>+</ButtonQuantity>
          </QuantityContainer>
        </div>
      </div>
    );
}
