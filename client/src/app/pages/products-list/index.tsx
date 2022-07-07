import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  BreadCrumbsContainer,
  BannerImg,
  BodyWrapper,
  BodyWrapperLeft,
  BodyWrapperRight,
  BodyWrapperRightBottom,
  BodyWrapperRightTop,
  Detail,
  SortedBy,
  SortedByTitle,
  Title,
  TopWrapper,
  TopWrapperLeft,
  Wrapper,
  SortBackground,
  DisplayBackground,
  DisplayBy,
  BodyWrapperRightTopLeft,
  PageContainer,
  ApplyFilterBtn,
  From,
  PriceBody,
  PriceBodyTop,
  PriceDetail,
  PriceFilter,
  PriceToggle,
  PriceToggleTitle,
  To,
  StatusFilter,
  StatusToggle,
  StatusToggleTitle,
  StatusBody,
} from './products-list.elements';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import NewsLetter from '../../components/news-letter';
import Announcement from '../../components/announcement';
import { useLocation, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CustomSeparator from '../../components/custom-separator';
import {
  Sort,
  ViewModule,
  ViewComfy,
  KeyboardArrowDown,
  KeyboardArrowUp,
  FilterList,
} from '@mui/icons-material';
import {
  Pagination,
  Box,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import ListProducts from '../../components/products-list';
import SearchComponent from './components/search';
import { useTranslation } from 'react-i18next';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useProduct } from '../../../features/hook'

function ProductsList() {
  const { t } = useTranslation();

  const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

  const arrSkeleton = Array.from(new Array(6));
  // const { isFetching } = useProduct()

  const [isFetching, setIsFetching] = useState<boolean>(true)

  const [isTogglePrice, setIsTogglePrice] = useState<boolean>(false);
  const [rangePrice, setRangePrice] = useState<number[]>([0, 200]);
  const [isToggleStatus, setIsToggleStatus] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('none');

  const [activeSortAsc, setActiveSortAsc] = useState<boolean>(true);
  const [activeSortDesc, setActiveSortDesc] = useState<boolean>(false);
  const [activeView1, setActiveView1] = useState<boolean>(true);
  const [activeView2, setActiveView2] = useState<boolean>(false);

  const [productsAll, setProductsAll] = useState([]);
  const [productSale, setProductSale] = useState([]);
  const [productsOrigin, setProductOrigin] = useState([]);

  //================== PAGINATION ======================:
  const [pageNumber, setPageNumber] = useState(1);
  const [pageData, setPageData] = useState<any>([]);

  const newsPerPage = activeView1 ? 6 : 8;
  const numberOfPage =
    status === 'none'
      ? Math.ceil(productsAll?.length / newsPerPage)
      : Math.ceil(productSale?.length / newsPerPage);

  const handleChangePage = (event: any, value: any) => {
    setPageNumber(value);
  };

  useEffect(() => {
    const indexOfLastNews = pageNumber * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const data = [];
    if (pageNumber >= 1) {
      status === 'none'
        ? data.push(productsAll.slice(indexOfFirstNews, indexOfLastNews))
        : data.push(productSale.slice(indexOfFirstNews, indexOfLastNews));
    }

    setPageData(data);
  }, [productsAll, newsPerPage, pageNumber, productSale, status]);

  //====================================================

  //Get pathname:
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  //Custom Separator
  const breadcrumbs = [
    <Link to="/" style={{ color: 'gray', textDecoration: 'none' }}>
      <Typography key="1" color="inherit">
        Home
      </Typography>
    </Link>,
    <Link to="/products" style={{ color: 'gray', textDecoration: 'none' }}>
      <Typography key="2" color="inherit">
        Products
      </Typography>
    </Link>,
  ];

  // Handle toggle filter:
  const handleTogglePriceFilter = (type: string) => {
    if (type === 'price') {
      setIsTogglePrice(prev => !prev);
    }
    if (type === 'status') {
      setIsToggleStatus(prev => !prev);
    }
  };

  //Hanle active sort and view:
  const handleClickItem = (item: string) => {
    if (item === 'sortAsc') {
      setActiveSortAsc(true);
      setActiveSortDesc(false);
    }
    if (item === 'sortDesc') {
      setActiveSortDesc(true);
      setActiveSortAsc(false);
    }
    if (item === 'view1') {
      setActiveView1(true);
      setActiveView2(false);
    }
    if (item === 'view2') {
      setActiveView2(true);
      setActiveView1(false);
    }
  };

  //handle set value when radio status change:
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value);
  };

  //handle set value when slider price change:
  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setRangePrice(newValue as number[]);
  };

  //Hanlde filter price in range:
  const handleFilterPriceInRange = () => {
    const [minPrice, maxPrice] = rangePrice;

    const newProducts = productsOrigin.filter(
      (item: any) => item.price >= minPrice && item.price <= maxPrice,
    );

    setProductsAll(newProducts);
  };

  //Function to sort by price and sale price:
  const sortByPriceAndSalePrice = (a: any, b: any, type: string) => {
    const priceA = a.price;
    const salePercentA = a.sale.percent;
    const salePriceA = priceA - priceA * (salePercentA / 100);
    const priceB = b.price;
    const salePercentB = b.sale.percent;
    const salePriceB = priceB - priceB * (salePercentB / 100);

    if (type === 'asc') {
      return priceA - priceB && salePriceA - salePriceB;
    }
    if (type === 'desc') {
      return priceB - priceA && salePriceB - salePriceA;
    }
  };

  //Sort by price ascending and descending:
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (activeSortAsc === false) {
        setProductsAll(prev => {
          return [...prev].sort((a: any, b: any): any =>
            sortByPriceAndSalePrice(a, b, 'desc'),
          );
        });
      }
      if (activeSortAsc === true) {
        setProductsAll(prev => {
          return [...prev].sort((a: any, b: any): any =>
            sortByPriceAndSalePrice(a, b, 'asc'),
          );
        });
      }
    }

    return () => {
      isMounted = false;
    };
  }, [activeSortAsc]);

  //Get all product by category (Origin):
  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `${URL}product?category=${cat}` : `${URL}product`,
        );

        setProductOrigin(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (isMounted) {
      getProducts();
    }

    return () => {
      isMounted = false;
    };
  }, [cat, URL]);

  //Get all product by category:
  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `${URL}product?category=${cat}` : `${URL}product`,
        );

        setProductsAll(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (isMounted) {
      getProducts();
    }

    return () => {
      isMounted = false;
    };
  }, [cat, URL]);

  //Get list sale products:
  useEffect(() => {
    let isMounted = true;

    const getListSaleProducts = () => {
      const saleProducts = productsAll.filter(
        (product: any) => product.sale.isSale === true,
      );

      setProductSale(saleProducts);
    };
    if (isMounted) {
      getListSaleProducts();
    }

    return () => {
      isMounted = false;
    };
  }, [productsAll]);

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false)
    }, 1000)
  }, [])

  //Auto scroll top when page loaded:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <BreadCrumbsContainer>
        <CustomSeparator>{breadcrumbs}</CustomSeparator>
      </BreadCrumbsContainer>

      <Wrapper>
        <TopWrapper>
          <TopWrapperLeft>
            <Title>{cat ? cat?.toUpperCase() : "PRODUCTS"}</Title>
            <Detail>
              {t('product_list_header_title_1')}{' '}
              {status === 'none' ? productsAll.length : productSale.length}{' '}
              {t('product_list_header_title_2')} {productsOrigin.length}{' '}
              {t('product_list_header_title_3')}
            </Detail>
          </TopWrapperLeft>
          <BannerImg
            src="https://sado.vn/images/news/2021/05/05/large/what-to-expect-2021-feature_1620181077.jpg"
            alt=""
          />
        </TopWrapper>

        <BodyWrapper>
          <BodyWrapperLeft>
            <PriceFilter>
              <PriceToggle onClick={() => handleTogglePriceFilter('price')}>
                <PriceToggleTitle>
                  {t('product_list_filter_price')}
                </PriceToggleTitle>
                {isTogglePrice ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </PriceToggle>

              <PriceBody toggle={isTogglePrice}>
                <PriceBodyTop>
                  <From>
                    {t('product_list_filter_price_from')} ${rangePrice[0]}
                  </From>
                  <To>
                    {t('product_list_filter_price_to')} ${rangePrice[1]}
                  </To>
                </PriceBodyTop>
                <Box sx={{ width: '90%', padding: '10px' }}>
                  <Slider
                    getAriaLabel={() => 'Price range'}
                    value={rangePrice}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    min={0}
                    max={500}
                    step={10}
                  />
                </Box>
                <ApplyFilterBtn onClick={handleFilterPriceInRange}>
                  {t('product_list_filter_price_apply')}
                </ApplyFilterBtn>
                <PriceDetail>
                  {t('product_list_filter_price_result')}:{' '}
                  {status === 'none' ? productsAll.length : productSale.length}{' '}
                  {t('product_list_header_title_3')}
                </PriceDetail>
              </PriceBody>
            </PriceFilter>

            <StatusFilter>
              <StatusToggle onClick={() => handleTogglePriceFilter('status')}>
                <StatusToggleTitle>
                  {t('product_list_filter_status')}
                </StatusToggleTitle>
                {isToggleStatus ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </StatusToggle>

              <StatusBody toggle={isToggleStatus}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="none"
                    name="radio-buttons-group"
                    value={status}
                    onChange={handleChangeRadio}
                  >
                    <FormControlLabel
                      value="none"
                      control={<Radio />}
                      label="None"
                    />
                    <FormControlLabel
                      value="sale"
                      control={<Radio />}
                      label="Sale"
                    />
                  </RadioGroup>
                </FormControl>
              </StatusBody>
            </StatusFilter>
          </BodyWrapperLeft>

          <BodyWrapperRight>
            <BodyWrapperRightTop>
              <BodyWrapperRightTopLeft>
                <SortedBy>
                  <SortedByTitle>{t('product_list_sort_by')}:</SortedByTitle>
                  <SortBackground activeColor={activeSortAsc}>
                    <Sort onClick={() => handleClickItem('sortAsc')} />
                  </SortBackground>
                  <SortBackground activeColor={activeSortDesc}>
                    <FilterList onClick={() => handleClickItem('sortDesc')} />
                  </SortBackground>
                </SortedBy>
                <DisplayBy>
                  <SortedByTitle>{t('product_list_view')}:</SortedByTitle>
                  <DisplayBackground
                    activeColor={activeView1}
                    onClick={() => handleClickItem('view1')}
                  >
                    <ViewModule />
                  </DisplayBackground>
                  <DisplayBackground
                    activeColor={activeView2}
                    onClick={() => handleClickItem('view2')}
                  >
                    <ViewComfy />
                  </DisplayBackground>
                </DisplayBy>
              </BodyWrapperRightTopLeft>

              {/* Begin Search */}
              <SearchComponent />
              {/* End Search */}
            </BodyWrapperRightTop>

            <BodyWrapperRightBottom>
              {!isFetching
                ? pageData[0]?.map((item: any, index: number) => (
                    <ListProducts
                      item={item}
                      keyProps={index}
                      activeView1={activeView1}
                    />
                  ))
                : arrSkeleton.map((item: any, index: number) => (
                    <Stack
                      sx={{
                        width: '300px',
                        marginBottom: '30px',
                        marginRight: '18px',
                      }}
                      spacing={1}
                    >
                      <Skeleton variant="rectangular" height={280} />
                      <Skeleton animation="wave" />
                      <Skeleton animation="wave" />
                    </Stack>
                  ))}
            </BodyWrapperRightBottom>

            <PageContainer>
              <Pagination
                count={numberOfPage}
                showFirstButton
                showLastButton
                onChange={handleChangePage}
              />
            </PageContainer>
          </BodyWrapperRight>
        </BodyWrapper>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductsList;
