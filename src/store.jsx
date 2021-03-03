import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { runSaga } from 'redux-saga';
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;