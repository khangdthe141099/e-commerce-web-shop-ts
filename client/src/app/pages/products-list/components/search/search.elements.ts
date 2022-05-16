import styled from 'styled-components'

//  Search:
export const SearchBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fecc45;
    border-radius: 20px;
    height: 100%;
    width: 100px;
    padding: 0px 10px;
    transition: all 0.5s ease;
    color: grey;
    &:hover {
        transform: scaleX(1.1);
        opacity: 0.8;
    }

    cursor: pointer;
`

export const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 500px;
    height: 38px;
    border: 2px solid transparent;
    border-radius: 20px;
    padding-left: 30px;
    background-color: rgba(22, 24, 35, 0.06);
    
    input:not(:placeholder-shown) ~ ${SearchBtn}{
        color: black;
    }

    // Active border color when click into input:
    &:focus-within {
        border: 2px solid #e5e7eb;
    }
`

export const SearchInput = styled.input`
    width: 90%;
    font-size: 16px;
    border: none;
    background-color: transparent;
    caret-color: #fecc45;
    &:focus {
        outline: none;
    }
`

export const ClearBtn = styled.div`
    margin-right: 10px;
`

export const LoadingIcon = styled.div`
    position: absolute;
    right: 114px;
    top: 50%;
    transform: translateY(-50%);
`

export const SearchText = styled.div`
    text-transform: uppercase;
    margin-left: 3px;
`

export const PopperContainer = styled.div`
    width: 430px;
`