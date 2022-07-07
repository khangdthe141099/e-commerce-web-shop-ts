import { createSlice } from '@reduxjs/toolkit'
import { UserState } from './types'

export const initialState: UserState = {
    currentUser: null,
    isFetching: false,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        logoutSuccess: (state) => {
            state.currentUser = null
            state.error = false
        },
        registerStart: (state, action) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false
            state.error = false
        },
        registerFailure: (state) => {
            state.isFetching = false
            state.error = true
        }

    }
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    registerStart,
    registerSuccess,
    registerFailure
} = userSlice.actions
export default userSlice.reducer

export const getUser = (state: any) => state.user