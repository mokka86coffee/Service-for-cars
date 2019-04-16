import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import api from './api';

//reducers
import worksListReducer from './reducers/worksListReducer.js';


const rootReducer = combineReducers({
    worksList: worksListReducer
});

const reduxLogger = createLogger({ collapsed: true });

const sagaMiddleware = createSagaMiddleware();

const initialStore = {
    worksList: {
        works: [],
        list: [],
        types: [],
        typeOfWork: 'Все категории',
        workTitle: 'Любые работы'
    }
};
import { put, takeEvery, call, all } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(()=>res('from promise'), ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  let result = yield delay(1000);
  console.log(result);
  yield put({ type: 'PUT' });
}

function* helloSaga() {
    console.log('helloSaga');
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('FETCHING_WORK_TYPES', incrementAsync)
}

function* rootSaga(){
    yield all([ helloSaga(), watchIncrementAsync() ]);
} 

const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware( thunkMiddleware.withExtraArgument(api), sagaMiddleware, reduxLogger )
);

sagaMiddleware.run(rootSaga);

export default store;
