import { createStore, combineReducers, applyMiddleware } from 'redux';
//reducers
import worksListReducer from './reducers/worksListReducer.js';
//middlewares
import apiMiddleware from './middlewares/apiMiddleware';

const reducer = combineReducers({
    worksList: worksListReducer
});

const fromMiddleware = applyMiddleware(apiMiddleware)(createStore);

const store = fromMiddleware(reducer, {
    worksList: {
        works: [],
        list: [],
        types: [],
        typeOfWork: 'Все категории',
        workTitle: 'Любые работы'
    }
});

export default store;
