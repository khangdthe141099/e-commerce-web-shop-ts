import React from 'react';
import {
  Container,
  Image1,
  Image2,
  Image3,
  Image4,
  Info,
  Left,
  Right,
  RightBottom,
  RightTop,
  RightTopLeft,
  RightTopRight,
  Title,
  BuyNow,
} from './features.elements';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Left>
          <Image1
            src="https://i.pinimg.com/564x/e6/4d/84/e64d84f2873f0b37c2795f180de437c3.jpg"
            alt=""
          />
          <Info info={1}>
            <Title titleProps={1}>{t('new_products')}</Title>
            <Link
              to={'/products'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <BuyNow>{t('shop_now')}</BuyNow>
            </Link>
          </Info>
        </Left>

        <Right>
          <RightTop>
            <RightTopLeft>
              <Image2
                src="https://i.pinimg.com/564x/83/53/d5/8353d5cead0c6ffb5f7b91f1e2db2cfa.jpg"
                alt=""
              />
              <Info info={2}>
                <Title titleProps={2}>Iphone</Title>
              </Info>
            </RightTopLeft>
            <RightTopRight>
              <Image3
                src="https://i.pinimg.com/564x/46/9e/0c/469e0c8d8e57f667ca7c2f7faa40ba66.jpg"
                alt=""
              />
              <Info info={3}>
                <Title titleProps={2}>Macbook</Title>
              </Info>
            </RightTopRight>
          </RightTop>

          <RightBottom>
            <Image4
              src="https://i.pinimg.com/564x/fa/a9/97/faa997115f4fdfaa2b40197a8d9081f8.jpg"
              alt=""
            />
            <Info info={4}>
              <Title titleProps={2}>{t('free_ship_all_order')}</Title>
            </Info>
          </RightBottom>
        </Right>
      </Container>
    </>
  );
}

export default Features;
