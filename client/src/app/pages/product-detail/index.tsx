import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useUser } from '../../../features/hook';
import { addProduct } from '../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import {
  Remove,
  Add,
  AddShoppingCart,
  Star,
  AccessTime,
} from '@mui/icons-material';
import axios from 'axios';
import { publicRequest } from '../../../api/requestMethods';
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  PriceContainer,
  SalePrice,
  SalePercent,
  SaleContainer,
  AmountTitle,
  AddToCartBtn,
  BuyNowBtn,
  TextButton,
  NumberOverView,
  OverView,
  TextOverView,
  OverViewOption,
  FlashSaleContainer,
  FlashSaleTitle,
  FlashSaleTitleLeft,
  FlashSaleTitleRight,
  Remaining,
  RemainingTitle,
  TimeBlock,
  TimeContainer,
  GLeft,
  GRight,
  Guarantee,
  GuaranteeIcon,
  TopWrapper,
  BreadCrumbsContainer,
} from './product.elements';
import Navbar from '../../components/navbar';
import Announcement from '../../components/announcement';
import Footer from '../../components/footer';
import { useTranslation } from 'react-i18next';
import ReviewsProduct from '../../components/reviews-product';
import NewsLetter from '../../components/news-letter';
import Typography from '@mui/material/Typography';
import CustomSeparator from '../../components/custom-separator';
import { useProduct } from '../../../features/hook'
import Loading from '../../components/loading'

function ProductDetail() {
  const [product, setProduct] = useState<any>();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

  //Multiple language:
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { currentUser } = useUser();
  const userId = currentUser?._id;
  const TOKEN = currentUser?.accessToken;

  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const categoryPath =
    location.pathname.split('/')[1].charAt(0).toUpperCase() +
    location.pathname.split('/')[1].slice(1);

  const rating = product?.rating;

    //Get product by product id:
    useEffect(() => {
        const getProduct = async () => {
          const res = await publicRequest.get(`/product/find/${id}`);
          setProduct(res.data);
        };
        getProduct();
      }, [id]);

  //========= Custom Separator ===========
  const breadcrumbs = [
    <Link to="/" style={{ color: 'gray', textDecoration: 'none' }}>
      <Typography key="1" color="inherit">
        Home
      </Typography>
    </Link>,
    <Link to="/products" style={{ color: 'gray', textDecoration: 'none' }}>
      <Typography key="2" color="inherit">
        {categoryPath}
      </Typography>
    </Link>,
    <Typography key="3" color="text.primary">
      {product?.title}
    </Typography>,
  ];
  //======================================

  //=========== SALE =================
  const isSale = product?.sale?.isSale;
  const price = product?.price;
  const salePercent = product?.sale?.percent;
  const salePrice = price - price * (salePercent / 100);
  //==================================

  const navigate = useNavigate();

  const handleQuantity = (type: string) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === 'inc') {
      setQuantity(quantity + 1);
    }
  };

  //Using redux to add to card:
  const handleClick = () => {
    try {
      const createCart = async () => {
        await axios({
          url: `${URL}cart`,
          method: 'POST',
          headers: { token: `Bearer ${TOKEN}` },
          data: {
            userId: userId,
            products: [
              {
                productId: product._id,
                quantity: quantity,
              },
            ],
          },
        });
      };
      if (currentUser) {
        createCart();

        dispatch(addProduct({ ...product, quantity, color, size, userId }));

        //Display Sweet Alert after add product to cart successfully:
        Swal.fire(
          'Add product successfully!',
          'Go to cart to view product details...',
          'success',
        ).then(result => {
          if (result.isConfirmed) {
            navigate(`/cart/${userId}`);
          }
        });
      } else {
        Swal.fire(
          'Add product failed!',
          'Please login to continue...',
          'warning',
        ).then(result => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Auto scroll top when page loaded:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 1000)
  }, [])


  return (
    <>
    {
      isFetching 
      ? <Loading /> 
      : (
        <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <BreadCrumbsContainer>
          <CustomSeparator>{breadcrumbs}</CustomSeparator>
        </BreadCrumbsContainer>
        <TopWrapper>
          <ImgContainer>
            <Image image={product?.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{product?.title}</Title>

            <OverView>
              <OverViewOption
                border={true}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <NumberOverView>{rating}</NumberOverView>
                {/* Render number of star of each product */}
                {Array(rating)
                  .fill('')
                  .map((_, index) => (
                    <Star
                      key={index}
                      sx={{
                        fontSize: '17px',
                        marginTop: '3px',
                        color: '#ee4d2d',
                      }}
                    />
                  ))}
              </OverViewOption>

              <OverViewOption border={true} style={{ paddingLeft: '10px' }}>
                <NumberOverView>350</NumberOverView>
                <TextOverView>{t('product_detail_evaluate')}</TextOverView>
              </OverViewOption>

              <OverViewOption style={{ paddingLeft: '10px' }}>
                <NumberOverView>998</NumberOverView>
                <TextOverView>{t('product_detail_sold')}</TextOverView>
              </OverViewOption>
            </OverView>

            {isSale && (
              <FlashSaleContainer>
                <FlashSaleTitle>
                  <FlashSaleTitleLeft>Flash</FlashSaleTitleLeft>
                  <FlashSaleTitleRight>Sale</FlashSaleTitleRight>
                </FlashSaleTitle>

                <Remaining>
                  <AccessTime sx={{ color: 'white', marginRight: '5px' }} />
                  <RemainingTitle>{t('product_detail_ends_in')}</RemainingTitle>
                  <TimeContainer>
                    <TimeBlock>10</TimeBlock>
                    <TimeBlock>25</TimeBlock>
                    <TimeBlock>07</TimeBlock>
                  </TimeContainer>
                </Remaining>
              </FlashSaleContainer>
            )}

            <Desc>{product?.desc}</Desc>

            <PriceContainer>
              <Price sale={isSale && 'sale'}>${price}</Price>
              {isSale && (
                <SaleContainer>
                  <SalePrice>{salePrice}</SalePrice>
                  <SalePercent>
                    {salePercent}% {t('product_detail_sale')}
                  </SalePercent>
                </SaleContainer>
              )}
            </PriceContainer>

            <FilterContainer>
              <Filter>
                <FilterTitle>{t('product_detail_color')}</FilterTitle>
                {product?.color?.map((c: any) => (
                  <FilterColor
                    color={c}
                    key={c}
                    onClick={() => setColor(c)}
                    active={c === color ? 'active' : ''}
                  />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>{t('product_detail_size')}</FilterTitle>
                <FilterSize onChange={e => setSize(e.target.value)}>
                  {product?.size?.map((s: any) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AmountContainer>
              <AmountTitle>{t('product_detail_quantity')}</AmountTitle>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>

            <AddContainer>
              <AddToCartBtn onClick={handleClick}>
                <AddShoppingCart sx={{ marginRight: '7px' }} />
                <TextButton>{t('product_detail_btn_add_to_cart')}</TextButton>
              </AddToCartBtn>
              <BuyNowBtn>
                <TextButton>{t('product_detail_btn_buy_now')}</TextButton>
              </BuyNowBtn>
            </AddContainer>

            <Guarantee>
              <GLeft>
                <GuaranteeIcon src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/67454c89080444c5997b53109072c9e0.png" />
                K-Tech. {t('product_detail_guarantee')}
              </GLeft>
              <GRight>{t('product_detail_money_back')}</GRight>
            </Guarantee>
          </InfoContainer>
        </TopWrapper>

        <ReviewsProduct />
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
      )
    }
    </>
  );
}

export default ProductDetail;
