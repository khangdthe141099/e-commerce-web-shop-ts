import React from 'react';
import { Container } from './popper.elements';

function Popper(props: { children: any }) {
  const { children } = props;
  return <Container>{ children }</Container>;
}

export default Popper;
