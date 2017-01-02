import { call, put, takeEvery } from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    yield call(delay, 0);
    yield put({type: 'INCREMENT'});
};

export default function* addAsync() {
    yield takeEvery('ADD', incrementAsync);
}
