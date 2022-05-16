import React from 'react';
import {
  FilterImage,
  Mask,
  Price,
  ProductItem,
  ProductItemBottom,
  ProductItemBottomTop,
  ProductItemCategory,
  ProductItemFooter,
  ProductItemImage,
  ProductItemName,
  ProductItemTop,
  ViewProductBtn,
  DiscountContainer,
  DiscountTitle,
  Percent,
  PageContainer,
  PriceWrapper,
  SalePrice,
} from './products-list-elements';
import { FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface initialState {
  item: any;
  keyProps?: number;
  activeView1?: boolean;
}

function ListProducts(props: initialState) {
  const { item, keyProps, activeView1 } = props;

  const price = item.price;
  const salePercent = item.sale.percent;
  const salePrice = price - price * (salePercent / 100);
  const isSale = item.sale.isSale;

  return (
    <ProductItem view={activeView1 ? true : false} key={keyProps}>
      <ProductItemTop view={activeView1 ? true : false}>
        <ProductItemImage view={activeView1 ? true : false} src={item.img} alt="" />
        <FilterImage>
          <Mask></Mask>
          <ViewProductBtn>
            <Link to={`/product/${item._id}`} style={{color: '#fecc45', textDecoration: 'none' }}>
              View Product
            </Link>
          </ViewProductBtn>
        </FilterImage>

        {isSale && (
          <DiscountContainer>
            <Percent>{salePercent}%</Percent>
            <DiscountTitle>Sale</DiscountTitle>
          </DiscountContainer>
        )}
      </ProductItemTop>

      <ProductItemBottom>
        <ProductItemBottomTop>
          <ProductItemName>{item.title}</ProductItemName>
          <ProductItemCategory>{item.categories[1]}</ProductItemCategory>
        </ProductItemBottomTop>

        <ProductItemFooter>
          <FavoriteBorder />
          <PriceWrapper>
            {isSale && <SalePrice>${salePrice}</SalePrice>}
            <Price isSale={isSale}>${item.price}</Price>
          </PriceWrapper>
        </ProductItemFooter>
      </ProductItemBottom>
    </ProductItem>
  );
}

export default ListProducts;
