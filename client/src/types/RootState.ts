import { CartState } from '../features/cart/types'
import { ProductState } from '../features/product/types';
import { UserState } from '../features/user/types';
import { LanguageState } from '../features/language/types';

export interface RootState {
    cart?: CartState
    product?: ProductState
    user?: UserState
    language?: LanguageState
}