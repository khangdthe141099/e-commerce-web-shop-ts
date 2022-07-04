import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productSlice";
import { getRequest, postUserRequest } from "../../utils/request";

//GET ALL PRODUCTS
export function* handleGetProducts() {
  const requestURL = '/product'

  try {
    //Response return a promise:
    const response: any[] = yield call(getRequest, requestURL);

    yield put(getProductSuccess(response));
  } catch (err: any) {
    yield put(getProductFailure());
  }
}

//DELETE
export function* handleDeleteProducts(action: PayloadAction<any>) {
  try {
    yield put(deleteProductSuccess(action.payload));
  }catch (err: any) {
    yield put(deleteProductFailure());
  }
}

//ADD
export function* handleAddProducts(action: PayloadAction<any>) {
  const requestURL = '/product/create'

  try{
    //Response return a promise:
    const response: any[] = yield call(postUserRequest, requestURL, action.payload);

    yield put(addProductSuccess(response));
  }catch(err: any) {
    yield put(addProductFailure());
  }
}

//UPDATE
export function* handleUpdateProducts(action: PayloadAction<any>) {
  try{
    yield put(updateProductSuccess(action.payload));
  }catch(err: any) {
    yield put(updateProductFailure());
  }
}

export function* productSaga() {
  yield all([
    takeLatest(getProductStart.type, handleGetProducts),
    takeLatest(deleteProductStart.type, handleDeleteProducts),
    takeLatest(addProductStart.type, handleAddProducts),
    takeLatest(updateProductStart.type, handleUpdateProducts)
  ])
}
