import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;