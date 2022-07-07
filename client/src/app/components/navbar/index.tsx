import React, { useEffect, useState, useRef } from 'react';
import { logoutSuccess } from '../../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../../features/hook';
import { useCart } from '../../../features/hook';
import {
  Search,
  ShoppingCartOutlined,
  Category,
  Home,
  Newspaper,
  ContactPage,
} from '@mui/icons-material';
import { removeProduct } from '../../../features/cart/cartSlice';
import nocart from '../../../assets/images/no_cart.png';
import { Badge } from '@mui/material';
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  CartContainer,
  MenuItem,
  NoCart,
  NoCartImg,
  ListProductContainer,
  PrevProductsContainer,
  PrevTitle,
  Price,
  ProductCat,
  ProductImg,
  ProductItem,
  ProductName,
  RemoveBtn,
  ViewCartBtn,
  TitleContainer,
  ProductCenter,
  ProductRight,
  PriceContainer,
  Quantity,
  LanguageOption,
  NavbarList,
  NavbarItem,
  NavigationNav,
} from './navbar.elements';
import i18n, { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { languages } from '../../../utils/mock-data/data';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Products } from '../../../types';
import { navbar } from '../../../utils/mock-data/data';
import { useLanguage } from '../../../features/hook';
import { setTypeLanguage } from '../../../features/language/languageSlice';
import autoAnimate from '@formkit/auto-animate';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'vn'],
    fallbackLng: 'en',
    detection: {
      // order and from where user language should be detected
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: { useSuspense: false },
  });

function Navbar() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [userProducts, setUserProducts] = useState<any>();

  const { products } = useCart();

  const { currentUser } = useUser();
  const userId = currentUser?._id;

  const dispatch = useDispatch();

  const { type } = useLanguage();

  const handleChangeLanguage = (code: string) => {
    i18next.changeLanguage(code);

    dispatch(setTypeLanguage(code));
  };

  const handleLogout = () => {
    //Xóa thông tin user ở redux
    dispatch(logoutSuccess());
  };

  const handleRemove = (id: string) => {
    dispatch(removeProduct(id));
  };

  //Lấy ra danh sách sản phẩm tương ứng với user:
  useEffect(() => {
    const userProduct = products.filter(
      (product: any) => product.userId === userId,
    );

    setUserProducts(userProduct);
  }, [products, userId]);

  const handleScrollTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

    //============= ANIMATION =============
    const parent = useRef<HTMLDivElement>(null);

    useEffect(() => {
      parent.current &&
        autoAnimate(parent.current);
    }, [parent]);
    //======================================

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            {languages.map(({ code, name, country_code }) => (
              <LanguageOption
                disabled={type === code}
                onClick={() => handleChangeLanguage(code)}
                key={country_code}
              >
                {code}
              </LanguageOption>
            ))}
          </Language>
          <NavigationNav>
            <NavbarList>
              <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                <NavbarItem>{t('nav_home')}</NavbarItem>
              </Link>
              <Link
                to={'/products'}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <NavbarItem>{t('nav_products')}</NavbarItem>
              </Link>
              <Link
                to={'/news'}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <NavbarItem>{t('nav_news')}</NavbarItem>
              </Link>
              <Link
                to={'/about'}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <NavbarItem>{t('nav_about')}</NavbarItem>
              </Link>
            </NavbarList>
          </NavigationNav>
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <Logo onClick={handleScrollTop}>K-TECH.</Logo>
          </Link>
        </Center>

        <Right>
          {currentUser ? (
            <>
              <MenuItem>
                {t('welcome')} {currentUser.name} !
              </MenuItem>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MenuItem onClick={handleLogout}>{t('log_out')}</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MenuItem>{t('register')}</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MenuItem>{t('sign_in')}</MenuItem>
              </Link>
            </>
          )}

          {/* Cart Layout */}
          <CartContainer>
            <Link
              to={`/cart/${userId}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Badge badgeContent={userProducts?.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>

            <NoCart noCart={userProducts?.length === 0 ? true : false}>
              {userProducts?.length === 0 ? (
                <NoCartImg src={nocart} alt="" />
              ) : (
                <PrevProductsContainer>
                  <TitleContainer>
                    <PrevTitle>{t('added_product')}</PrevTitle>
                  </TitleContainer>
                  <ListProductContainer>
                    {userProducts?.map((product: Products, index: any) => {
                      const isSale = product.sale.isSale;
                      const salePercent = product.sale.percent;
                      const price = product.price;
                      const salePrice = price - price * (salePercent / 100);
                      const category = product.categories[1];

                      return (
                        <ProductItem key={index} ref={parent}>
                          <ProductImg src={product.img} alt="" />
                          <ProductCenter>
                            <ProductName>{product.title}</ProductName>
                            <ProductCat>
                              {t('category')}: {category}
                            </ProductCat>
                          </ProductCenter>
                          <ProductRight>
                            <PriceContainer>
                              <Price>${isSale ? salePrice : price}</Price>
                              <Quantity>x {product.quantity}</Quantity>
                            </PriceContainer>
                            <RemoveBtn
                              onClick={() => handleRemove(product._id)}
                            >
                              {t('remove_btn')}
                            </RemoveBtn>
                          </ProductRight>
                        </ProductItem>
                      );
                    })}
                  </ListProductContainer>
                  <Link to={`/cart/${userId}`}>
                    <ViewCartBtn>{t('view_cart_btn')}</ViewCartBtn>
                  </Link>
                </PrevProductsContainer>
              )}
            </NoCart>
          </CartContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
