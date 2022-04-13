import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    active: 1
}

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload
        }
    }
});

export const {
    setActive
} = activeSlice.actions
export default activeSlice.reducer

export const getActive = (state: any) => state.active