import React, { useState } from 'react'
import { ButtonQuantity, Quantity, QuantityContainer } from '../../styles/Styles';

export const DetailCounter = (carrito) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        setCount(count + 1)
    }
    
    const handleSub = () => {
        setCount(count - 1)
    }
    
    return (
      <>
        <QuantityContainer>
          <ButtonQuantity onClick={handleSub}>-</ButtonQuantity>
          <Quantity>{count}</Quantity>
          <ButtonQuantity onClick={handleAdd}>+</ButtonQuantity>
        </QuantityContainer>
      </>
    );
}
