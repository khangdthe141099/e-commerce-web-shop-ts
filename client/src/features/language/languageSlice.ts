import { createSlice } from '@reduxjs/toolkit'
import { LanguageState } from './types'

export const initialState: LanguageState = {
    type: "en"
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setTypeLanguage: (state, action) => {
            state.type = action.payload
        }
    }
});

export const {
    setTypeLanguage
} = languageSlice.actions
export default languageSlice.reducer

export const getLanguage = (state: any) => state.type