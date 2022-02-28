import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { loginStart, loginSuccess, loginFailure } from './userSlice'
import { request } from '../../utils/request'

export function* handleLogin(action: PayloadAction<any>) {
    const requestURL = '/login'

   try{
       //Response return a promise:
        const response: any[] = yield call(request, requestURL, action.payload)
        
        yield put(loginSuccess(response))
   }catch (err: any){
        yield put(loginFailure())
   }
}

export function* userSaga(){
    yield takeLatest(loginStart.type, handleLogin)
}