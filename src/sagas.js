import { call, put } from 'redux-saga/effects'
import { takeEvery, takeLatest } from 'redux-saga'
import axios from 'axios';

// worker saga
// worker saga recieves the action from redux

export function* createDataAsync(action) {
    try {
        //call api here
        console.log('In the worker saga !!! ');
        const response = yield call(axios.get, 'https://jsonplacxvxcveholder.typicode.com/posts')
        console.log('------------------------------------------');
        console.log(response);
        yield put({ type: 'USER_FETCH_STARTED', response: response.data })

    } catch (e) {
        //deal with werror
        console.log('ERROR MAN !');
        console.log(e);
        yield put({ type: 'USER_FETCH_ERROR', message: e.message })

    }
}



//Watcher Saga
export function* watchCreateLesson() {
    console.log('redux-saga is running on USER_FETCH_REQUESTED acton listerner');
    yield takeEvery('USER_FETCH_REQUESTED', createDataAsync)
}
//Root saga
export default function* rootSaga() {
    yield [
        watchCreateLesson(),
    ]
}