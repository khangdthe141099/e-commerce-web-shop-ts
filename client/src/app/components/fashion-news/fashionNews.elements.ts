import styled from 'styled-components'

export const Container = styled.div`    
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 45px;
`

export const NewsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const NewsItem = styled.div`
    flex: 1;
    min-width: 290px;
    height: 100%;
    padding: 10px;
`

export const Image = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 10px;
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`

export const DateCreate = styled.div`
    padding: 10px;
    color: grey;
`

export const Author = styled.div`
    font-weight: bold;
`

export const NewsTitle = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`

export const Description = styled.div`
    text-align: center;
    font-size: 16px;
    padding: 10px 0px;
`

export const Option = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
`

export const OptionTitle = styled.span`
    border-bottom: 3px solid black;
`

export const PageContainer = styled.div`
    padding: 10px;
`