import { createSlice } from '@reduxjs/toolkit'
import { ProductState } from './types'

export const initialState: ProductState = {
    isFetching: false,
    error: false,
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductStart: (state) => {
            state.isFetching = true
        },
        fetchProductSuccess: (state) => {
            state.isFetching = false
        },
        fetchProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    }
});

export const {
    fetchProductStart,
    fetchProductSuccess,
    fetchProductFailure,
} = productSlice.actions

export default productSlice.reducer

export const getProductState = (state: any) => state.product