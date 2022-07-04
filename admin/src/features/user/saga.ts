import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure
} from "./userSlice";
import { request, getUserRequest } from "../../utils/request";

export function* handleLogin(action: PayloadAction<any>) {
  const requestURL = "/login";

  try {
    //Response return a promise:
    const response: any[] = yield call(request, requestURL, action.payload);

    yield put(loginSuccess(response));
  } catch (err: any) {
    yield put(loginFailure());
  }
}

//ADD
export function* handleAddUsers(action: PayloadAction<any>) {
    const requestURL = '/register'

    try{
        const response: any[] = yield call(request, requestURL, action.payload)

        yield put(addUserSuccess(response))
    }catch (err: any){
        yield put(addUserFailure())
    }
}

//GET ALL PRODUCTS
export function* handleGetUsers() {
  const requestURL = "/user/find";

  try {
    //Response return a promise:
    const response: any[] = yield call(getUserRequest, requestURL);

    yield put(getUserSuccess(response));
  } catch (err: any) {
    yield put(getUserFailure());
  }
}

//DELETE
export function* handleDeleteUsers(action: PayloadAction<any>) {
  try {
    yield put(deleteUserSuccess(action.payload));
  } catch (err: any) {
    yield put(deleteUserFailure());
  }
}

//UPDATE
export function* handleUpdateUsers(action: PayloadAction<any>) {
  try {
    yield put(updateUserSuccess(action.payload));
  } catch (err: any) {
    yield put(updateUserFailure());
  }
}


export function* userSaga() {
  yield all([
    takeLatest(loginStart.type, handleLogin),
    takeLatest(getUserStart.type, handleGetUsers),
    takeLatest(deleteUserStart.type, handleDeleteUsers),
    takeLatest(updateUserStart.type, handleUpdateUsers),
    takeLatest(addUserStart.type, handleAddUsers)
]);
}
