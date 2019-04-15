import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

//reducers
import worksListReducer from './reducers/worksListReducer.js';


const rootReducer = combineReducers({
    worksList: worksListReducer
});

const reduxLogger = createLogger({ collapsed: true });

const initialStore = {
    worksList: {
        works: [],
        list: [],
        types: [],
        typeOfWork: 'Все категории',
        workTitle: 'Любые работы'
    }
};

const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware( thunkMiddleware.withExtraArgument(api), reduxLogger )
);

export default store;
