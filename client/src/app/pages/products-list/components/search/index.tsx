import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PopperItems from '../popper/popper-items';
import {
  SearchBtn,
  SearchInput,
  SearchText,
  SearchWrapper,
  ClearBtn,
  LoadingIcon,
  PopperContainer,
} from './search.elements';
import { Cancel, Search as SearchIcon } from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';
import TippyHeadless from '@tippyjs/react/headless';
import PopperWrapper from '../popper';
import useDebounce from '../../../../../hooks/useDebounce';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const URL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000/';

function Search() {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>([1]);
  const [showResult, setShowResult] = useState<boolean>(true);
  const [productsAll, setProductsAll] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  //Get pathname:
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  const inputRef = useRef<HTMLInputElement | null>(null);

  const debounced = useDebounce(searchValue, 500);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current?.focus(); //Focus input when clear text
  };

  const handleChange = (e: any) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    if (!debounced?.trim()) {
      setSearchResult([]);
      return;
    }

    const handleSearch = async () => {
      if (debounced?.trim()) {
        setLoading(true);

        const searchResult = productsAll.filter((item: any) =>
          item.title.toLowerCase().includes(debounced.toLowerCase()),
        );

        setSearchResult(searchResult);

        setTimeout(() => {
          setLoading(false);
        }, 500)
      }
    };

    handleSearch();
  }, [debounced, productsAll]);

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
  }, [cat]);

  return (
    <TippyHeadless
      interactive
      visible={showResult && searchResult.length > 0}
      placement="bottom-start"
      offset={[0, 8]}
      zIndex={10}
      render={attrs => (
        <PopperContainer {...attrs}>
          <PopperWrapper>
            {searchResult?.map((item: any, index: string) => (
              <PopperItems key={index} data={item} />
            ))}
          </PopperWrapper>
        </PopperContainer>
      )}
      onClickOutside={handleHideResult}
    >
      <SearchWrapper>
        <SearchInput
          ref={inputRef}
          value={searchValue}
          spellCheck={false}
          onChange={handleChange}
          placeholder="Search products"
          onFocus={() => setShowResult(true)}
        />
        {searchValue && !loading && (
          <ClearBtn onClick={handleClear}>
            <Cancel sx={{ fontSize: '16px' }} />
          </ClearBtn>
        )}

        {loading && (
          <LoadingIcon>
            <ClipLoader color="grey" loading={true} size={14} />
          </LoadingIcon>
        )}
        <SearchBtn>
          <SearchIcon />
          <SearchText>{t('product_list_search_btn')}</SearchText>
        </SearchBtn>
      </SearchWrapper>
    </TippyHeadless>
  );
}

export default Search;
