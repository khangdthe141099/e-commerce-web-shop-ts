import {
    registerStart,
    registerSuccess,
    registerFailure
} from './user/userSlice'
import {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure
} from './product/productSlice'
import { publicRequest } from '../api/requestMethods'

export const register = async (dispatch: any, user: any) => {
    dispatch(registerStart())

    try {
        const res = await publicRequest.post('/register', user)

        dispatch(registerSuccess(res.data))
    } catch (err) {
        dispatch(registerFailure())
    }
}

export const fetchProduct = async (dispatch: any) => {
    dispatch(fetchProductStart())

    try {
        setTimeout(() => {
            dispatch(fetchProductSuccess())
        }, 1500)
    } catch (err) {
        dispatch(fetchProductFailure())
    }
}