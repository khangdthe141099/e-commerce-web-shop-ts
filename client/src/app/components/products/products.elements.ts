import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
`

export const ProductsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Button = styled.button`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background-color: black;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    &:hover {
        opacity: 0.8;
    }
`

export const BtnTitle = styled.span`
    
`

export const LoadContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const EndMessage = styled.div`
`

