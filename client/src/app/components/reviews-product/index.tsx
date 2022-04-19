import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Visibility,
  Favorite,
} from '@mui/icons-material';
import {
  Container,
  TabContainer,
  TabName,
  TabOption,
  TabQuantity,
  IconContainer,
  Price,
  ProductImage,
  ProductItem,
  ProductItemBottom,
  ProductItemTop,
  ProductTitle,
  RelatedProductsContainer,
  RelatedProductsTitle,
  ProductsContainer,
  Icon1,
  Icon2,
  Icon3,
  SaleTag,
  OriginPrice,
  SalePrice
} from './reviewsProduct.elements';
import { tabs } from './data';
import Reviews from './Reviews'
import Description from './Description'

function ReviewsProduct() {
  const [products, setProducts] = useState<any>([]);
  const [tabId, setTabId] = useState(1);
  const [product, setProduct] = useState<any>([]);

  const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

  const location = useLocation()

  const id = location.pathname.split("/")[2]

  const productDesc = product.filter((item: any) => item?._id === id)


  const handleClick = (id: number) => {
    setTabId(id);
  };

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${URL}product`);

        setProducts(res.data.slice(27, 32));
        setProduct(res.data)
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [URL]);

  return (
    <Container>
      <TabContainer>
        {tabs.map((item: any, index: any) => (
          <TabOption onClick={() => handleClick(item.id)} key={index}>
            <TabName active={tabId === item.id && true}>{item.name}</TabName>
            {item.id === 2 && (
              <TabQuantity active={tabId === item.id && true}>6</TabQuantity>
            )}
          </TabOption>
        ))}
      </TabContainer>

      {tabId === 1 ? (
        <Description desc={productDesc[0]?.desc}/>
      ) : (
        <Reviews />
      )}

      <RelatedProductsContainer>
        <RelatedProductsTitle>Related Products</RelatedProductsTitle>
        <ProductsContainer>
          {products?.map((item: any, index: any) => {
            const price = item?.price
            const isSale = item?.sale.isSale
            const salePercent = item?.sale.percent
            const salePrice = price - price * (salePercent / 100)
            return (
              <ProductItem key={index}>
                <ProductItemTop>
                  <ProductImage src={item?.img} alt=""/>
                  {
                    isSale && <SaleTag>{salePercent}% Sale</SaleTag>
                  }
                  <IconContainer>
                    <Icon1>
                    <ShoppingCart />
                    </Icon1>
                    <Icon2>
                    <Link 
                    onClick={handleScrollTop}
                    style={{color: 'white'}} 
                    to={`/product/${item?._id}`}>
                    <span style={{display: 'none'}}>Hi</span>
                    <Visibility />
                    </Link>
                    </Icon2>
                    <Icon3>
                    <Favorite />
                    </Icon3>
                  </IconContainer>
                </ProductItemTop>
  
                <ProductItemBottom>
                  <ProductTitle>{item?.title}</ProductTitle>
                  <Price>
                    {
                      isSale && <SalePrice>{salePercent}$</SalePrice>
                    }
                    <OriginPrice>{salePrice}$</OriginPrice>
                  </Price>
                </ProductItemBottom>
              </ProductItem>
            )
          })}
        </ProductsContainer>
      </RelatedProductsContainer>
    </Container>
  );
}

export default ReviewsProduct;
