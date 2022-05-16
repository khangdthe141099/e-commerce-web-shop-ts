import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BreadCrumbsContainer = styled.div`
   font-size: 14px;
   margin-left: 140px;
   margin-top: 30px;
`

export const Wrapper = styled.div`
    margin: 30px 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 250px;
`

export const TopWrapperLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    font-size: 48px;
    font-weight: bold;
`

export const Detail = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
`

export const BannerImg = styled.img`
    flex: 2;
    height: 100%;
    width: 100%;
`

export const BodyWrapper = styled.div`
    margin-top: 30px;
    display: flex;
`

export const BodyWrapperRightTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;
`

export const SortedBy = styled.div`
    display: flex;
    align-items: center;
    margin-right: 18px;
`

export const SortedByTitle = styled.div`
    margin-right: 18px;
    font-weight: bold;
`

export const SortBackground = styled.div`
    background-color: ${(props: {activeColor?: boolean}) => props.activeColor === true ? '#fecc45' : ''};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    cursor: pointer;
`

export const BodyWrapperRightTopLeft = styled.div`
    display: flex;
    align-items: center;
`

export const DisplayBy = styled.div`
    display: flex;
    align-items: center;
`

export const DisplayBackground = styled.div`
    background-color: ${(props: {activeColor?: boolean}) => props.activeColor === true ? '#fecc45' : ''};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    margin-right: 8px;
    cursor: pointer;
`

export const BodyWrapperRightBottom = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const ProductItem = styled.div`
    flex: 1;
    min-width: ${(props: {view?: boolean}) => props.view === true ? '300px' : '220px'};
    height: ${(props: {view?: boolean}) => props.view === true ? '410px' : '100px'};
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

export const ProductItemTop = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover ${FilterImage}{
        opacity: 1;
    }
`

export const ProductItemImage = styled.img`
    height: 100%;
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
    justify-content: space-between;
    padding: 0px 10px;
`

export const ProductItemBottomTop = styled.div`

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
`

export const Price = styled.div`
    font-size: 16px;
    font-weight: 500;
`

export const PageContainer = styled.div`
    display: relative;
`

export const BodyWrapperRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    width: 996px;
`
// ============ Filter Components ===============
export const BodyWrapperLeft = styled.div`
    margin-top: 72px;
    width: 263px;  
`

export const PriceFilter = styled.div`
    box-shadow: 0px 0px 5px 0px #888888;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const PriceToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fecc45;
    padding: 10px;
    cursor: pointer;
`

export const PriceToggleTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
`

export const PriceBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    display: ${(props: {toggle?: any}) => props.toggle === true ? 'none' : ''};
`

export const PriceBodyTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const From = styled.div`
    font-size: 16px;
`

export const To = styled.div`
    font-size: 16px;
`

export const ApplyFilterBtn = styled.div`
    align-self: center;
    border: 2px solid #dddddd;
    padding: 7px 20px;
    font-weight: 500;
    &:hover {
        border: 2px solid #fecc45;
    }
    cursor: pointer;
`

export const PriceDetail = styled.div`
    margin: 12px 0px 5px 0px;
`

export const StatusFilter = styled.div`
    box-shadow: 0px 0px 5px 0px #888888;
`

export const StatusToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fecc45;
    padding: 10px;
    cursor: pointer;
`

export const StatusToggleTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
`

export const StatusBody = styled.div`
    display: ${(props: {toggle?: any}) => props.toggle === true ? 'none' : ''};
    padding: 10px;
`


