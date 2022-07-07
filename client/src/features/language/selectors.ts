import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';
import { initialState } from './languageSlice';

const selectDomain = (state: RootState) => state.language || initialState

export const selectLanguage = createSelector(
    [selectDomain],
    languageState => languageState
)

