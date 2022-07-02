import styled from 'styled-components'
import { device } from '../../../utils/responsive'

export const Container = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Left = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
    &:before {
        content: "";
        background-color: pink;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.3;
    }
`

export const Right = styled.div`
    flex: 1;
    margin: 3px;
    height: 71vh;
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const RightTop = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    width: 48vw; 
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
    display: flex;
`

export const RightTopLeft = styled.div`
    flex: 1;
    margin: 3px;
    height: 100%;
    width: 100%;
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
    &:before {
        content: "";
        background-color: blue;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.1;
    }
`

export const RightTopRight = styled.div`
    flex: 1;
    margin: 3px;
    height: 100%;
    width: 100%;
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
    &:before {
        content: "";
        background-color: blue;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.1;
    }
`

export const RightBottom = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
    &:before {
        content: "";
        background-color: blue;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.1;
    }
    
`

export const Image1 = styled.img`
    position: absolute;
    width: 100%;  
    height: 100%;  
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const Image2 = styled.img`
    position: absolute;
    width: 100%;  
    height: 100%;  
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const Image3 = styled.img`
    position: absolute;
    width: 100%;  
    height: 100%;  
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const Image4 = styled.img`
    position: absolute;
    width: 100%;  
    height: 100%;  
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
`

export const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    z-index: 2;
    @media ${device.laptopAsus} { 
        top: ${(props: {info?: number}) => {
        if(props.info === 1){
            return '37%'
        }
        if(props.info === 2){
            return '40%'
        }
        if(props.info === 3){
            return '40%'
        }
        if(props.info === 4){
            return '45%'
        }
    }}; 
    left: ${(props: {info?: number}) => {
        if(props.info === 1){
            return '31%'
        }
        if(props.info === 2){
            return '42%'
        }
        if(props.info === 3){
            return '38%'
        }
        if(props.info === 4){
            return '32%'
        }
    }};
    }
    text-align: center;
`

export const Title = styled.div`
    color: white;
    margin-bottom: 20px;
    font-size: ${(props: {titleProps?: number}) => {
        if(props.titleProps === 1){
            return '60px'
        }
        if(props.titleProps === 2){
            return '25px'
        }
    }};
    font-weight: bold; 
`

export const BuyNow = styled.div`
    color: white;
    font-size: 30px;
    border-bottom: 3px solid white;
    padding-bottom: 5px;
`