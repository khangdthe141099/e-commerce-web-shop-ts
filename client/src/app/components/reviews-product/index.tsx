import React, { useState, useEffect } from 'react';
import { Star } from '@mui/icons-material';
import axios from 'axios';
import {
  AddReview,
  AddReviewDesc,
  AddReviewRating,
  AddReviewRatingTitle,
  AddReviewTitle,
  Container,
  DateCreate,
  Desc,
  Image,
  Info,
  Name,
  ReviewItem,
  ReviewList,
  ReviewsContainer,
  StarRate,
  TabContainer,
  TabName,
  TabOption,
  TabQuantity,
  ReviewItemLeft,
  IconContainer,
  Price,
  ProductImage,
  ProductItem,
  ProductItemBottom,
  ProductItemTop,
  ProductTitle,
  RelatedProductsContainer,
} from './reviewsProduct.elements';
import Form from './Form';
import { tabs } from './data';

function ReviewsProduct() {
  const [products, setProducts] = useState([]);
  const [tabId, setTabId] = useState(1);

  const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

  const handleClick = (id: number) => {
    setTabId(id);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${URL}product`);

        setProducts(res.data.slice(0, 4));
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
        'Description'
      ) : (
        <ReviewsContainer>
          <ReviewList>
            <ReviewItem>
              <ReviewItemLeft>
                <Image src="https://i.pinimg.com/564x/f5/cb/57/f5cb5719b4fad10964d944918a55575e.jpg" />
                <Info>
                  <Name>Dam Tuan Khang</Name>
                  <DateCreate>15 04 2022</DateCreate>
                  <Desc>Very Good!</Desc>
                </Info>
              </ReviewItemLeft>
              <StarRate>
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
              </StarRate>
            </ReviewItem>
            <ReviewItem>
              <ReviewItemLeft>
                <Image src="https://i.pinimg.com/564x/f5/cb/57/f5cb5719b4fad10964d944918a55575e.jpg" />
                <Info>
                  <Name>Dam Tuan Khang</Name>
                  <DateCreate>15 04 2022</DateCreate>
                  <Desc>Very Good!</Desc>
                </Info>
              </ReviewItemLeft>
              <StarRate>
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
              </StarRate>
            </ReviewItem>
          </ReviewList>

          <AddReview>
            <AddReviewTitle>Add A Review</AddReviewTitle>
            <AddReviewDesc>
              Your email address will not be published. Required fields are
              marked *
            </AddReviewDesc>
            <AddReviewRating>
              <AddReviewRatingTitle>Your Rating *</AddReviewRatingTitle>
              <StarRate>
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
                <Star
                  sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }}
                />
              </StarRate>
            </AddReviewRating>

            <Form />
          </AddReview>
        </ReviewsContainer>
      )}

      <RelatedProductsContainer>
        {products.map((item: any, index: any) => (
          <ProductItem>
            <ProductItemTop>
              <ProductImage />
              <IconContainer></IconContainer>
            </ProductItemTop>

            <ProductItemBottom>
              <ProductTitle>{item.title}</ProductTitle>
              <Price>{item.price} $</Price>
            </ProductItemBottom>
          </ProductItem>
        ))}
      </RelatedProductsContainer>
    </Container>
  );
}

export default ReviewsProduct;
