import React, { useState, useEffect } from 'react'
import {
    ArrowBackIosNew,
    ArrowForwardIos,
    FlashOn,
    ShoppingCartOutlined,
    SearchOutlined,
    FavoriteBorderOutlined
} from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
    Container,
    Header,
    Arrow,
    Body,
    CountdownContainer,
    DiscountContainer,
    DiscountTitle,
    Image,
    ImgContainer,
    InfoContainer,
    Left,
    Option,
    Percent,
    Price,
    Product,
    ProductContainer,
    Right,
    Sold,
    Title,
    Wrapper,
    Span,
    Icon,
    Info
} from './sale-products.elements'
import Countdown from '../countdown'
import { useTranslation } from "react-i18next";
// import { fetchProduct } from '../../../features/apiCalls'
import { fetchProductStart } from '../../../features/product/productSlice'
import { useDispatch } from 'react-redux'

function SaleProducts() {
    const [products, setProducts] = useState([])
    const [slideIndex, setSlideIndex] = useState(0)

    const { t } = useTranslation()

    const dispatch = useDispatch()

    //Filter to get list sale products:
    const saleProducts = products.filter((product: any) => product.sale.isSale === true)

    //Get time countdown => pass to component Countdown
        const time = new Date();
        time.setSeconds(time.getSeconds() + 3600);

    //Call API get list product:
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product`)

                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getProducts()
    }, [])


    //Handle slider product:
    const handleClick = (direction: string) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 2)
        }
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Title>
                        <Span>F<FlashOn fontSize="large" />ASH</Span>
                        <Span sale="sale">SALE</Span>
                    </Title>
                    <CountdownContainer>
                        <Countdown expiryTimestamp={time} />
                    </CountdownContainer>
                </Left>

                <Right>
                <Link to="/products/sale" style={{textDecoration: "none"}}>
                    <Option onClick={() => dispatch(fetchProductStart())}>
                        {t('see_all')} 
                        <ArrowForwardIos fontSize="small" />
                    </Option>
                </Link>
                </Right>
            </Header>

            <Body>
                <ProductContainer>
                    <Arrow
                        slideIndex={slideIndex}
                        direction="left"
                        onClick={() => handleClick('left')}>
                        <ArrowBackIosNew />
                    </Arrow>

                    {/* Slider Index is Image Index */}
                    <Wrapper slideIndex={slideIndex}>
                        {
                            saleProducts.map((product: any, index) => {
                                const price = product.price
                                const salePercent = product.sale.percent
                                const salePrice = price - price * (salePercent / 100)

                                return (
                                    <Product key={index}>
                                        <ImgContainer>
                                            <Image src={product.img} />
                                        </ImgContainer>

                                        <DiscountContainer>
                                            <Percent>{salePercent}%</Percent>
                                            <DiscountTitle>{t('sale')}</DiscountTitle>
                                        </DiscountContainer>

                                        <InfoContainer>
                                            <Price>{t('price')} {salePrice}</Price>
                                            <Sold>{t('product_detail_sold')} 4</Sold>
                                        </InfoContainer>

                                        <Info>
                                            <Icon>
                                                <ShoppingCartOutlined />
                                            </Icon>
                                            <Icon>
                                                <Link
                                                    style={{ color: 'black' }}
                                                    to={`/product/${product._id}`}>
                                                    <SearchOutlined />
                                                </Link>
                                            </Icon>
                                            <Icon>
                                                <FavoriteBorderOutlined />
                                            </Icon>
                                        </Info>
                                    </Product>
                                )
                            })
                        }
                    </Wrapper>

                    <Arrow
                        slideIndex={slideIndex}
                        direction="right"
                        onClick={() => handleClick('right')}>
                        <ArrowForwardIos />
                    </Arrow>
                </ProductContainer>
            </Body>
        </Container>
    )
}

export default SaleProducts
