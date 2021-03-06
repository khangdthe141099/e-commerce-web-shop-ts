import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Visibility, Favorite } from '@mui/icons-material';
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
  SalePrice,
} from './reviewsProduct.elements';
import { tabs } from './data';
import Reviews from './Reviews';
import Description from './Description';
import { useTranslation } from 'react-i18next';
import autoAnimate from '@formkit/auto-animate';

function ReviewsProduct() {
  //Multiple language:
  const { t } = useTranslation();

  const [products, setProducts] = useState<any>([]);
  const [tabId, setTabId] = useState(1);
  const [product, setProduct] = useState<any>([]);

  const randomNumber = Math.floor(Math.random() * 3);

  const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

  const location = useLocation();

  const id = location.pathname.split('/')[2];

  const productDesc = product.filter((item: any) => item?._id === id);

  const productsRelatedAll = products.filter(
    (item: any) => item?.categories[1] === productDesc[0]?.categories[1],
  );
  const productRelated = productsRelatedAll.slice(
    randomNumber,
    randomNumber + 5,
  );

  const handleClick = (id: number) => {
    setTabId(id);
  };

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${URL}product`);

        setProducts(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [URL]);

  //============= ANIMATION =============
  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current);
  }, [parent]);
  //======================================

  return (
    <Container>
      <TabContainer>
        {tabs.map((item: any, index: any) => (
          <TabOption onClick={() => handleClick(item.id)} key={index}>
            <TabName active={tabId === item.id && true}>
              {item.name === 'Description'
                ? t('product_detail_description')
                : t('product_detail_review')}
            </TabName>
            {item.id === 2 && (
              <TabQuantity active={tabId === item.id && true}>6</TabQuantity>
            )}
          </TabOption>
        ))}
      </TabContainer>

      <div ref={parent}>
        {tabId === 1 ? (
          <Description desc={productDesc[0]?.desc} />
        ) : (
          <Reviews />
        )}
      </div>

      <RelatedProductsContainer>
        <RelatedProductsTitle>
          {t('product_detail_related_products')}
        </RelatedProductsTitle>
        <ProductsContainer>
          {productRelated?.map((item: any, index: any) => {
            const price = item?.price;
            const isSale = item?.sale.isSale;
            const salePercent = item?.sale.percent;
            const salePrice = price - price * (salePercent / 100);
            return (
              <ProductItem key={index}>
                <ProductItemTop>
                  <ProductImage src={item?.img} alt="" />
                  {isSale && <SaleTag>{salePercent}% Sale</SaleTag>}
                  <IconContainer>
                    <Icon1>
                      <ShoppingCart />
                    </Icon1>
                    <Icon2>
                      <Link
                        onClick={handleScrollTop}
                        style={{ color: 'white' }}
                        to={`/product/${item?._id}`}
                      >
                        <span style={{ display: 'none' }}>Hi</span>
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
                    {isSale && <SalePrice>{salePercent}$</SalePrice>}
                    <OriginPrice>{salePrice}$</OriginPrice>
                  </Price>
                </ProductItemBottom>
              </ProductItem>
            );
          })}
        </ProductsContainer>
      </RelatedProductsContainer>
    </Container>
  );
}

export default ReviewsProduct;
