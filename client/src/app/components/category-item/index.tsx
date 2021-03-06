import React from 'react'
import { Link } from "react-router-dom";
// import { fetchProduct } from '../../../features/apiCalls'
import { fetchProductStart } from '../../../features/product/productSlice'
import { useDispatch } from 'react-redux'
import { Category } from './types'
import {
    Container,
    Image,
    Info,
    Title,
    Button
} from './category-item.elements'
import { useTranslation } from "react-i18next";


function CategoryItem(props: { category: Category }) { 
    const { t } = useTranslation()

    const dispatch = useDispatch()

    //Delay api call => display lazy load:
    const handleClick = () => {
        dispatch(fetchProductStart())
    }    

    return (
        <Container>
            <Image id="testImg" src={props.category.img} alt="category image"/>
            <Info id={props.category.id}>
                <Title>{props.category.title}</Title>
                <Link to={`/products/${props.category.cat}`}>
                <Button onClick={handleClick}>{t('shop_now')}</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
