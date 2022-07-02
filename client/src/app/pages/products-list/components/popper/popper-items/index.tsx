import React from 'react';
import {
  Image,
  Info,
  Name,
  NameContainer,
  Wrapper,
} from './popper-items.elements';
import { Link } from 'react-router-dom';

interface initProps {
  data: any;
}

function PopperItems(props: initProps) {
  const { data } = props

  return (
    <Link to={`/product/${data?._id}`} style={{color: 'black', textDecoration: 'none' }}>
    <Wrapper>
      <Image
        src={data?.img}
        alt={data?.desc}
      />
      <Info>
        <NameContainer>
          <Name>{data?.title}</Name>
        </NameContainer>
      </Info>
    </Wrapper>
    </Link>
  );
}

export default PopperItems;
