import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '../../../features/hook';
import {
  changeQuantityInCart,
  checkoutSuccess,
  removeProduct,
} from '../../../features/cart/cartSlice';
import { Remove, Add, Delete } from '@mui/icons-material';
// import { fetchProduct } from '../../../features/apiCalls'
import { fetchProductStart } from '../../../features/product/productSlice';
import { useNavigate, Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../../api/requestMethods';
import { useCart } from '../../../features/hook';
import {
  Container,
  Bottom,
  Button,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
  Sale,
  ButtonRemove,
  CartEmptyImg,
} from './card.elements';
import Announcement from '../../components/announcement';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { useTranslation } from 'react-i18next';
import autoAnimate from '@formkit/auto-animate';

function Cart() {
  const { products } = useCart();

  const { currentUser } = useUser();
  const userId = currentUser?._id;

  const [stripeToken, setStripeToken] = useState<any>();
  const [userProducts, setUserProducts] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //Multiple language:
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const KEY =
    'pk_test_51KBFaCJdarKw3EgP9KG3G4T82t2yHexGTfjf23yJYJKH0CDBmK5CV5Jd5GZM24WJ6jUP0KTZ4SfzjrBPWbZvYQra007ziAhRta';

  //Sau khi thanh toán xong => chạy vào hàm onToken => set stripeToken thông tin thanh toán
  const onToken = (token: any) => {
    setStripeToken(token);
  };

  //Xóa sản phẩm khỏi giỏ hàng khi click remove button:
  const handleRemove = (product: any) => {
    dispatch(removeProduct(product));
  };

  //Thay đổi số lượng mỗi sản phẩm trong cart:
  const handleClick = (props: { type: string; product: any }) => {
    const { type, product } = props;
    dispatch(changeQuantityInCart({ type, product }));
  };

  //Get list product tương ứng với user:
  useEffect(() => {
    const userP = products.filter((product: any) => product.userId === userId);

    setUserProducts(userP);
  }, [products, userId]);

  //Get total order tương ứng với list product của user:
  useEffect(() => {
    const totalP = userProducts.reduce((total: any, product: any) => {
      const price = product.price;
      const isSale = product.sale.isSale;
      const salePercent = product.sale.percent;
      const salePrice = price - price * (salePercent / 100);
      let subTotal = 0;
      if (isSale) {
        subTotal = product.quantity * salePrice;
      } else {
        subTotal = product.quantity * price;
      }

      return total + subTotal;
    }, 0);

    //Round number at most 2 decimal places
    const roundTotal = Math.round((totalP + Number.EPSILON) * 100) / 100;

    setTotalPrice(roundTotal);
  }, [userProducts, userId]);

  useEffect(() => {
    console.log(userProducts);
  }, [userProducts]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate('/success', {
          state: {
            stripeData: res.data,
            products: userProducts,
            total: totalPrice,
          },
        });

        dispatch(checkoutSuccess(userId));
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, dispatch, userId, userProducts, totalPrice]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //============= ANIMATION =============
  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current);
  }, [parent]);
  //======================================
  

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>{t('product_cart_your_bag')}</Title>
        <Top>
          <Link to={'/products'}>
            <TopButton onClick={() => dispatch(fetchProductStart())}>
              {t('product_cart_continue_shopping')}
            </TopButton>
          </Link>
          <TopTexts>
            <TopText>
              {t('product_cart_shopping_bag')} ({userProducts.length})
            </TopText>
            <TopText>{t('product_cart_your_wishlish')} (0)</TopText>
          </TopTexts>
          <StripeCheckout
            name="K-Tech"
            image="https://athgroup.vn/Images/Img_Products/images/ath-y-nghia-logo-Apple(2).png"
            billingAddress
            shippingAddress
            description={`Your total is ${totalPrice}`}
            amount={totalPrice * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton kieu="filled">
              {t('product_cart_checkout_now')}
            </TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info ref={parent}>
            {/* Kiểm tra nếu không có sp trong giỏ hàng thì hiển thị image cart empty */}
            {userProducts?.length === 0 && (
              <CartEmptyImg
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-app-6c0e7.appspot.com/o/emptyCart.png?alt=media&token=fa0279aa-de59-4165-8d6c-5c0a419c32c9"
                alt=""
              />
            )}
            {/* Nếu có sp trong giỏ hàng thì map list sản phẩm và hiển thị */}
            {userProducts.map((product: any, index: any) => {
              const price = product.price;
              const isSale = product.sale.isSale;
              const salePercent = product.sale.percent;
              const salePrice = price - price * (salePercent / 100);

              const totalPrice = product.quantity * price;
              const totalPriceRound =
                Math.round((totalPrice + Number.EPSILON) * 100) / 100;
              const totalSalePrice = product.quantity * salePrice;
              const totalSalePriceRound =
                Math.round((totalSalePrice + Number.EPSILON) * 100) / 100;

              const productId = product._id;

              return (
                <>
                  <Product key={index}>
                    <ProductDetail>
                      <Image src={product.img} alt="" />
                      <Details>
                        <ProductName>
                          <b>{t('product_cart_product')}:</b> {product.title}
                          {isSale && (
                            <Sale>
                              {salePercent}% {t('product_cart_sale')}
                            </Sale>
                          )}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize>
                          <b>{t('product_cart_size')}:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add
                          onClick={() =>
                            handleClick({
                              type: 'asc',
                              product,
                            })
                          }
                        />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove
                          onClick={() =>
                            handleClick({
                              type: 'des',
                              product,
                            })
                          }
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        ${isSale ? totalSalePriceRound : totalPriceRound}
                      </ProductPrice>
                    </PriceDetail>
                    <ButtonRemove onClick={() => handleRemove(product)}>
                      <Delete color="error" />
                    </ButtonRemove>
                  </Product>
                  <Hr />
                </>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>{t('product_cart_order_summary')}</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>{t('product_cart_sub_total')}</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                {t('product_cart_estimate_shipping')}
              </SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                {t('product_cart_shipping_discount')}
              </SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>{t('product_cart_total')}</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>

            {/* ===== STRIPE CHECKOUT ===== */}
            <StripeCheckout
              name="K-Tech"
              image="https://athgroup.vn/Images/Img_Products/images/ath-y-nghia-logo-Apple(2).png"
              billingAddress
              shippingAddress
              description={`Your total is ${totalPrice}`}
              amount={totalPrice * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>{t('product_cart_checkout_now')}</Button>
            </StripeCheckout>
            {/* =========================== */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
