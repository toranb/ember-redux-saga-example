import createSagaMiddleWare from 'redux-saga';
import addAsync from '../sagas/counter';

const createSaga = createSagaMiddleWare.default ? createSagaMiddleWare.default : createSagaMiddleWare;

const sagaMiddleware = createSaga();

const setup = () => {
    sagaMiddleware.run(addAsync);
};

export default {
    middleware: [sagaMiddleware],
    setup: setup
};
