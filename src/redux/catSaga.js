import { put, call, takeEvery } from "@redux-saga/core/effects"
import { getCatSuccess } from "./catSlice";

function* watcherRunFunc(){
    const response = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'))
    const formatted = yield response.json();
    const shortened = formatted.slice(0, 10)
    yield put(getCatSuccess(shortened))
}


function* watcherCat(){
    yield takeEvery('catSlice/getCatFetch' , watcherRunFunc)
}


export default watcherCat