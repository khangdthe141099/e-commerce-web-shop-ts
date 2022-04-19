import styled from 'styled-components'

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