import { createSlice } from '@reduxjs/toolkit'
import { UserState } from './types'

export const initialState: UserState = {
    currentUser: null,
    isFetching: false,
    error: false,
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
    }
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
} = userSlice.actions
export default userSlice.reducer
