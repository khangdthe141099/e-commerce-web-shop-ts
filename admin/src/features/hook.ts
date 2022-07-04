import { useSelector } from 'react-redux';
import { selectProduct } from './product/selectors'
import { selectUser } from './user/selectors' 


export const useUser = () => {
    const user = useSelector(selectUser)
    return user
}

export const useProduct = () => {
    const product = useSelector(selectProduct)
    return product
}