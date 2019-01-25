import { combineReducers } from 'redux';

import transactionsReducer from './reducer-transactions';


const rootReducer = combineReducers({
  transactionsReducer
});

export default rootReducer;