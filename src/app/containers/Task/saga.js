import { put, takeLatest } from 'redux-saga/effects';

function* fetchData(action) {
  if (action.url !== '') {
    const json = yield fetch(action.url)
      .then(response => response.json());
    yield put({ type: "LOAD_DATA_SUCCESS", response: json.items });
  }
  else {
    yield put({ type: "DATA_EMPTY", response: [] });
  }
}

export function* actionWatcher() {
  yield takeLatest('LOAD_DATA', fetchData);
}