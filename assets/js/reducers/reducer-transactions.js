import { FETCH_TRANSACTIONDATA } from '../types';

const INITIAL_STATE = {
    transactionsData: { trans: [], error: null, loading: false }
};

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case FETCH_TRANSACTIONDATA.PENDING:
            return { ...state, transactionsData: { trans: [], error: null, loading: true } };
        case FETCH_TRANSACTIONDATA.FULFILLED:
            return { ...state, transactionsData: { trans: action.payload, error: null, loading: false } };
        case FETCH_TRANSACTIONDATA.SUCCESS:
            return { ...state, transactionsData: { trans: action.payload, error: null, loading: false } };
        case FETCH_TRANSACTIONDATA.FAILURE:
            error = action.payload || { message: action.payload.message };
            return { ...state, transactionsData: { trans: [], error: error, loading: false } };
        default:
            return state;
    }
}