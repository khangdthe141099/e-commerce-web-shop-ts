import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useProduct } from '../../../features/hook';
import NoProduct from '../../components/no-product';
import Loading from '../../components/loading';
import axios from 'axios';
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  BreadCrumbsContainer,
} from './product-list.elements';
import Navbar from '../../components/navbar';
import Announcement from '../../components/announcement';
import Products from '../../components/products';
import NewsLetter from '../../components/news-letter';
import Footer from '../../components/footer';
import { useTranslation } from 'react-i18next';
import CustomSeparator from '../../components/custom-separator';
import Typography from '@mui/material/Typography';

function ProductList() {
  const [isProducts, setIsProducts] = useState(false);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

  //Multiple language:
  const { t } = useTranslation();

  //Get pathname:
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const categoryPath =
    location.pathname.split('/')[1].charAt(0).toUpperCase() +
    location.pathname.split('/')[1].slice(1);

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
    <Link to="/products" style={{ color: 'gray', textDecoration: 'none' }}>
      <Typography key="2" color="inherit">
        {cat}
      </Typography>
    </Link>,
  ];
  //======================================

  //Fetching product => Lazy loading
  const { isFetching } = useProduct();

  const handleFilters = (e: any) => {
    const typeSelect = e.target.name;
    const value = e.target.value;
    setFilter({
      ...filter,
      [typeSelect]: value,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `${URL}product?category=${cat}` : `${URL}product`,
        );

        setIsProducts(res.data.length > 0 ? true : false);

        if (cat === 'sale') {
          setIsProducts(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat, URL]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <Container>
          <Announcement />
          <Navbar />
          <Title>{cat}</Title>
          <BreadCrumbsContainer>
            <CustomSeparator>{breadcrumbs}</CustomSeparator>
          </BreadCrumbsContainer>
          <FilterContainer>
            <Filter>
              <FilterText>{t('product_category_filter_product')}: </FilterText>
              <Select name="color" onChange={handleFilters}>
                <Option disabled selected>
                  {t('product_category_filter_color')}
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Pink</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select name="size" onChange={handleFilters}>
                <Option disabled selected>
                  {t('product_category_filter_size')}
                </Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
              </Select>
            </Filter>

            <Filter>
              <FilterText>{t('product_category_sort_product')}: </FilterText>
              <Select onChange={e => setSort(e.target.value)}>
                <Option value="newest">
                  {t('product_category_sort_newest')}
                </Option>
                <Option value="asc">
                  {t('product_category_sort_price_asc')}
                </Option>
                <Option value="desc">
                  {t('product_category_sort_price_desc')}
                </Option>
              </Select>
            </Filter>
          </FilterContainer>
          {isProducts ? (
            <Products cat={cat} filter={filter} sort={sort} />
          ) : (
            setTimeout(() => {
              <NoProduct />;
            }, 1500)
          )}
          <NewsLetter />
          <Footer />
        </Container>
      )}
    </>
  );
}

export default ProductList;
