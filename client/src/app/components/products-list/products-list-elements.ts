import styled from 'styled-components'

export const ProductItem = styled.div`
    width: ${(props: {view?: boolean}) => props.view === true ? '300px' : '220px'};
    height: ${(props: {view?: boolean}) => props.view === true ? '410px' : '325px'};
    margin-right: 18px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 5px 0px #888888;
    display: flex;
    flex-direction: column;
`

export const FilterImage = styled.div` 
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
    display:  flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`

export const DiscountContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 55px;
    height: 50px;
    background-color: rgba(255, 216, 57, 1);
    z-index: 2;
    &:after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: -10px;
        border-width: 0 27.5px 10px;
        border-style: solid;
        border-color: red rgba(255, 216, 57, 1) transparent rgba(255, 216, 57, 1);
    }
`

export const Percent = styled.p`
    color: #ee4e2f;
    font-weight: 400;
    font-size: 20px;
    position: relative;
    left: 9px;
    bottom: 17px;
    width: 100%;
`

export const DiscountTitle = styled.p`
    color: white;
    font-weight: 400;
    font-size: 20px;
    position: relative;
    left: 9px;
    bottom: 42px;
`

export const ProductItemTop = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props: {view?: boolean}) => props.view === true ? '300px' : '220px'};
    &:hover ${FilterImage}{
        opacity: 1;
    }
`

export const ProductItemImage = styled.img`
    height: ${(props: {view?: boolean}) => props.view === true ? '300px' : '220px'};
    width: 100%;
    z-index: 2;
`

export const Mask = styled.div`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
`

export const ViewProductBtn = styled.div`
    z-index: 1;
    position: absolute;
    background-color: transparent;
    border: 2px solid #fecc45;
    color: #fecc45;
    padding: 4px 12px;
`

export const ProductItemBottom = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 0px 10px;
    height: 100%;
`

export const ProductItemBottomTop = styled.div`
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const ProductItemName = styled.div`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
`

export const ProductItemCategory = styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
`

export const ProductItemFooter = styled.div`
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-weight: 400;
`

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const SalePrice = styled.div`
    color: red;
    font-weight: 500;
    font-size: 20px;
    margin-right: 5px;
`

export const Price = styled.div`
    font-weight: 500;
    color: ${(props: {isSale?: boolean}) => props.isSale === true && '#a3a3a3'};
    font-size: ${(props: { isSale?: boolean }) => props.isSale === true ? '16px' : '20px'};
    text-decoration: ${(props: { isSale?: boolean }) => props.isSale === true && 'line-through 2px #a3a3a3 solid'};
`

export const PageContainer = styled.div`

`