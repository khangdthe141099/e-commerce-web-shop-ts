import React, { useState, useEffect, useRef } from 'react';
import { ScaleLoader } from 'react-spinners';
import axios from 'axios';
import {
  Container,
  LoadContainer,
  Button,
  ProductsList,
  BtnTitle,
} from './products.elements';
import Product from '../product';
import { ProductsProps } from './types';
import autoAnimate from '@formkit/auto-animate';

const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

function Products(product: ProductsProps) {
  const { cat, filter, sort } = product;

  const [products, setProducts] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  const [filteredSaleProducts, setFilteredSaleProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [limit, setLimit] = useState(8);
  const [limitProducts, setLimitProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //============= ANIMATION =============
  const parent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  //======================================

  //Fetch list products from database:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${URL}product`);

        setListProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [URL]);

  //Get list sale products:
  useEffect(() => {
    const getListSaleProducts = () => {
      const saleProducts = listProducts.filter(
        (product: any) => product.sale.isSale === true,
      );

      setSaleProducts(saleProducts);
    };
    getListSaleProducts();
  }, [listProducts]);

  //Get all product by category:
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `${URL}product?category=${cat}` : `${URL}product`,
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat, URL]);

  //Filter Products by Color and Size:
  useEffect(() => {
    //Filter list products by category:
    cat &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value),
          ),
        ),
      );

    //Filter list products by sale products:
    if (cat && cat === 'sale') {
      setFilteredSaleProducts(
        saleProducts.filter((item: any) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value),
          ),
        ),
      );
    }
  }, [products, saleProducts, cat, filter]);

  //Sort list products:
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev =>
        [...prev].sort((a: any, b: any) => a.createdAt - b.createdAt),
      );
      setFilteredSaleProducts(prev =>
        [...prev].sort((a: any, b: any) => a.createdAt - b.createdAt),
      );
    } else if (sort === 'asc') {
      setFilteredProducts(prev =>
        [...prev].sort((a: any, b: any) => a.price - b.price),
      );
      setFilteredSaleProducts(prev =>
        [...prev].sort((a: any, b: any) => a.price - b.price),
      );
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a: any, b: any) => b.price - a.price),
      );
      setFilteredSaleProducts(prev =>
        [...prev].sort((a: any, b: any) => b.price - a.price),
      );
    }
  }, [sort]);

  const getMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLimit(prevLimit => prevLimit + 8);
    }, 1500);
  };

  useEffect(() => {
    setLimitProducts(products.slice(0, limit));
  }, [products, limit]);

  return (
    <Container>
      <ProductsList ref={parent}>
        {cat
          ? cat === 'sale'
            ? filteredSaleProducts.map((item, index) => (
                <Product item={item} key={index} />
              ))
            : filteredProducts.map((item, index) => (
                <Product item={item} key={index} />
              ))
          : limitProducts.map((item, index) => (
              <Product item={item} key={index} />
            ))}
      </ProductsList>
      {loading ? (
        <LoadContainer>
          <ScaleLoader
            speedMultiplier={1}
            // size={10}
          />
        </LoadContainer>
      ) : limitProducts.length !== products.length ? (
        <Button onClick={getMoreData}>
          <BtnTitle>LOAD MORE</BtnTitle>
        </Button>
      ) : (
        ''
      )}
    </Container>
  );
}

export default Products;
