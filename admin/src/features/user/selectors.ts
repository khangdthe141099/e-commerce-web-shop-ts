import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../types";
import { initialState } from "./userSlice";

const selectDomain = (state: RootState) => state.user || initialState;

export const selectUser = createSelector(
  [selectDomain],
  (userState) => userState
);
