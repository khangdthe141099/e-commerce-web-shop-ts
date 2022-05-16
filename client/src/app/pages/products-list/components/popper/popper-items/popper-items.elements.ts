import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    cursor: pointer;
    height: 50px;
    &:hover {
        background: rgba(22, 24, 35, 0.03);
    }
`

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

export const Info = styled.div`
    flex: 1;
    margin-left: 12px;
`

export const NameContainer = styled.h4`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
`

export const Name = styled.div`

`