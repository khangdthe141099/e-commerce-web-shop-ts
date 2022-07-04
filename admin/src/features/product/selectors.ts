import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../types";
import { initialState } from "./productSlice";

const selectDomain = (state: RootState) => state.product || initialState;

export const selectProduct = createSelector(
  [selectDomain],
  (productState) => productState
);
