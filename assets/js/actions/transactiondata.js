import axios from 'axios';

import { ROOT_URL, FETCH_TRANSACTIONDATA, API_URL_CONTEXT } from '../types';

export function fetchTransactionData() {
    return (dispatch) => {
        dispatch({ type: FETCH_TRANSACTIONDATA.PENDING });
        axios.get(`${ROOT_URL}${API_URL_CONTEXT.TRANSACTIONDATA}`)
            .then((res) => {
                dispatch(fetchTransactionDataSuccess(res));
            })
            .catch((error) => {
                dispatch(fetchTransactionDataFailure(error));
            })
    }
}

export function fetchTransactionDataSuccess(result) {
    return {
        type: FETCH_TRANSACTIONDATA.SUCCESS,
        payload: result
    };
}

export function fetchTransactionDataFailure(error) {
    return {
        type: FETCH_TRANSACTIONDATA.FAILURE,
        payload: error
    };
}
