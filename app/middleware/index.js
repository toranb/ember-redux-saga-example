import Ember from 'ember';
import createSagaMiddleWare from 'npm:redux-saga';
import addAsync from '../sagas/counter';

const createSaga = createSagaMiddleWare.default ? createSagaMiddleWare.default : createSagaMiddleWare;

const sagaMiddleware = createSaga();

Ember.run.next(() => sagaMiddleware.run(addAsync));

export default [sagaMiddleware];
