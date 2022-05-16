import React, { useState, useEffect, useRef } from 'react';
import PopperItems from '../popper/popper-items'
import {
  SearchBtn,
  SearchInput,
  SearchText,
  SearchWrapper,
  ClearBtn,
  LoadingIcon,
  PopperContainer
} from './search.elements';
import { Cancel, Search as SearchIcon } from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';
import TippyHeadless from '@tippyjs/react/headless';
import PopperWrapper from '../popper';

function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>([1])
  const [showResult, setShowResult] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleHideResult = () => {
    setShowResult(false)
  }
  
  const handleClear = () => {
    setSearchValue('');
    inputRef.current?.focus(); //Focus input when clear text
  };

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
            <PopperItems />
            <PopperItems />
            <PopperItems />
            <PopperItems />
            <PopperItems />
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
        onChange={(e: any) => setSearchValue(e.target.value)}
        placeholder="Search products"
        onFocus={() => setShowResult(true)} />
        <ClearBtn onClick={handleClear}>
          <Cancel sx={{ fontSize: '16px' }} />
        </ClearBtn>
        {/* <LoadingIcon>
          <ClipLoader color="grey" loading={true} size={14} />
        </LoadingIcon> */}
        <SearchBtn>
          <SearchIcon />
          <SearchText>Search</SearchText>
        </SearchBtn>
      </SearchWrapper>
    </TippyHeadless>
  );
}

export default Search;
