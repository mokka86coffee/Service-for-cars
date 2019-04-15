import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//reducers
import worksListReducer from './reducers/worksListReducer.js';


const rootReducer = combineReducers({
    worksList: worksListReducer
});

const store = createStore(
    rootReducer,
    initStore,
    applyMiddleware(thunkMiddleware)
);

const initStore = {
    worksList: {
        works: [],
        list: [],
        types: [],
        typeOfWork: 'Все категории',
        workTitle: 'Любые работы'
    }
};

export default store;
