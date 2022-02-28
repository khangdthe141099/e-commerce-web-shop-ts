import { all } from 'redux-saga/effects'
import { userSaga } from './user/saga'
import { productSaga } from './product/saga'
import { cartSaga } from './cart/saga'

export default function* rootSaga() { 
    yield all([
        userSaga(),
        productSaga(),
        cartSaga()
    ])
}