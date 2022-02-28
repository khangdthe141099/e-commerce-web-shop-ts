import { createSlice } from '@reduxjs/toolkit'
import { InitialState } from './types'

const initialState: InitialState = {
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