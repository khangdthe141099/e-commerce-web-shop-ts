import { CartState } from '../features/cart/types'
import { ProductState } from '../features/product/types';
import { UserState } from '../features/user/types';

export interface RootState {
    cart?: CartState
    product?: ProductState
    user?: UserState
}