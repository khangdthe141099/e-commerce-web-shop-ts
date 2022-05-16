import React from 'react';
import {
    Image,
    Info,
    Name,
    NameContainer,
    Wrapper
 } from './popper-items.elements'

function PopperItems() {
  return (
    <Wrapper>
      <Image
        src="https://i.pinimg.com/564x/74/1a/6a/741a6a7c426f116e995c99acc9629c21.jpg"
        alt="Khang"
      />
      <Info>
        <NameContainer>
          <Name>Nguyen Van A</Name>
        </NameContainer>
      </Info>
    </Wrapper>
  );
}

export default PopperItems;
