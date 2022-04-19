import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { ShoppingCartOutlined, 
        SearchOutlined, 
        FavoriteBorderOutlined
} from '@mui/icons-material';
import {
    Container,
    Circle,
    Image,
    Info,
    Icon
} from './product.elements'
import { Item } from './types'

function Product(props: {item: Item}) {
    const URL = process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/"

    const handleIncreaseView = async () => {
        await axios.patch(`${URL}product/increase/view/${props.item._id}`)
    }

    return (
        <Container>
            <Circle />
            <Image src={props.item.img} alt="product"/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link onClick={handleIncreaseView} to={`/product/${props.item._id}`}>
                    <span style={{display: 'none'}}>Hi</span>
                    <SearchOutlined style={{color: "black"}}/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
