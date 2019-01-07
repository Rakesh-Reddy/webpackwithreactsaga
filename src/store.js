import { createStore, applyMiddleware } from 'redux';
import Reducer from './app/containers/Task/Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;