import React, { useState } from 'react';
import {
  AddReview,
  AddReviewDesc,
  AddReviewRating,
  AddReviewRatingTitle,
  AddReviewTitle,
  DateCreate,
  Desc,
  Image,
  Info,
  Name,
  ReviewItem,
  ReviewItemLeft,
  ReviewList,
  ReviewsContainer,
  StarRate,
} from './reviews.elements';
import { Star } from '@mui/icons-material';
import Form from '../Form/index';
import Rating from '@mui/material/Rating';
import { useTranslation } from 'react-i18next';

function Reviews() {
  //Multiple language:
  const { t } = useTranslation();

  const [value, setValue] = useState(2);

  return (
    <ReviewsContainer>
      <ReviewList>
        <ReviewItem>
          <ReviewItemLeft>
            <Image src="https://i.pinimg.com/564x/f5/cb/57/f5cb5719b4fad10964d944918a55575e.jpg" alt=""/>
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
            <Image src="https://i.pinimg.com/564x/f5/cb/57/f5cb5719b4fad10964d944918a55575e.jpg" alt=""/>
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
        <AddReviewTitle>{t('product_detail_add_a_review')}</AddReviewTitle>
        <AddReviewDesc>
          {t('product_detail_marked')}
        </AddReviewDesc>
        <AddReviewRating>
          <AddReviewRatingTitle>{t('product_detail_your_rating')}</AddReviewRatingTitle>
          <StarRate>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event: any, newValue: any) => {
                setValue(newValue);
              }}
            />
          </StarRate>
        </AddReviewRating>

        <Form />
      </AddReview>
    </ReviewsContainer>
  );
}

export default Reviews;
