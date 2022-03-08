import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure} from './userSlice'
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

export function* handleRegister(action: PayloadAction<any>) {
    const requestURL = '/register'

    try{ 
        const response: any[] = yield call(request, requestURL, action.payload)

        yield put(registerSuccess(response))
    }catch (err: any){
        yield put(registerFailure())
    }
}

export function* userSaga(){
    yield takeLatest(loginStart.type, handleLogin)
    yield takeLatest(registerStart.type, handleRegister)
}