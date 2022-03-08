import { put, takeLatest, delay } from 'redux-saga/effects';
import { fetchProductStart, fetchProductSuccess, fetchProductFailure } from './productSlice'

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* handleProduct() {
   try{
      yield delay(1500)
      yield put(fetchProductSuccess())
   }catch (err: any){
      yield put(fetchProductFailure())
   }
}

export function* productSaga() {
   yield takeLatest(fetchProductStart.type, handleProduct)
}

