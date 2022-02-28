import { useSelector } from 'react-redux';
import { selectCart } from './cart/selectors'
import { selectProduct } from './product/selectors'
import { selectUser } from './user/selectors' 


export const useCart = () => {
    const cart = useSelector(selectCart)
    return cart
}

export const useUser = () => {
    const user = useSelector(selectUser)
    return user
}

export const useProduct = () => {
    const product = useSelector(selectProduct)
    return product
}