import React from 'react'
import { Link } from "react-router-dom";
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

    return (
        <Container>
            <Circle />
            <Image src={props.item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${props.item._id}`}>
                    <SearchOutlined />
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
