import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0px;
    padding-bottom: 30px;
`

export const TabContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    color: grey;
    margin-bottom: 40px;
    cursor: pointer;
`

export const TabOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 35px;
    border-bottom: 3px solid grey;
    padding-bottom: 5px;
`

export const TabName = styled.span`
    margin-right: 10px;
    color: ${(props: {active: boolean}) => props.active === true && 'black'};
    font-weight: ${(props: {active: boolean}) => props.active === true && 'bold'};
`

export const TabQuantity = styled.div`
    background-color: grey;
    color: white;
    border-radius: 50%;
    padding: 5px 11px;
    font-size: 15px;
    background-color: ${(props: {active: boolean}) => props.active === true && 'black'};
`

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

export const ReviewItem = styled.div`
    border-bottom: 1px solid #d2d1d1;
    width: 900px;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ReviewItemLeft = styled.div`
    display: flex;
    align-items: center;
`

export const Image = styled.img`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-right: 30px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const DateCreate = styled.span`
    font-size: 16px;
    margin-bottom: 5px;
`

export const Desc = styled.span`
    font-size: 16px;
`

export const StarRate = styled.div`

`

export const AddReview = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
`

export const AddReviewTitle = styled.span`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const AddReviewDesc = styled.span`
    margin-bottom: 10px;
    font-size: 16px;
`

export const AddReviewRating = styled.div`
    margin-bottom: 10px;
`

export const AddReviewRatingTitle = styled.span`
    padding-bottom: 10px;
    font-size: 16px;
`
export const RelatedProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const RelatedProductsTitle = styled.span`
    font-size: 22px;
    font-weight: bold;
`

export const ProductsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    bottom: 0;
    margin-bottom: 10px;
    opacity: 0;
    transition: 0.5s;
    cursor: pointer;
`

export const ProductImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #d2d1d1;
`

export const SaleTag = styled.div` 
    position: absolute;
    background-color: #ff6229;
    color: white;
    padding: 1px 5px;
    left: 0;
    top: 0;
    margin-top: 10px;
    opacity: 0.8;
`

export const Icon1 = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: 0.5s;
    transform: translateY(18px);
    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
`

export const Icon2 = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: 1s;
    transform: translateY(18px);
    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
`

export const Icon3 = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: 1.5s;
    transform: translateY(18px);
    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
`

export const ProductItem = styled.div`
    width: 220px;
    height: 360px;
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
`

export const ProductItemTop = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 3;
    &:hover ${IconContainer}{
        opacity: 1;
    };
    &:hover ${Icon1}{
        transform: translateY(0);
    };
    &:hover ${Icon2}{
        transform: translateY(0);
    };
    &:hover ${Icon3}{
        transform: translateY(0);
    }
`

export const ProductItemBottom = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 10px;
`

export const ProductTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
`

export const Price = styled.div`
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const SalePrice = styled.div`
    margin-right: 10px;
    color: grey;
    text-decoration: line-through;
`

export const OriginPrice = styled.div`

`


