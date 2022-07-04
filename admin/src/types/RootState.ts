import { ProductState } from '../features/product/types';
import { UserState } from '../features/user/types';

export interface RootState {
    product?: ProductState
    user?: UserState
}