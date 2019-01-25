
export function createAsyncConst(type) {
    return {
        PENDING: `${type}_PENDING`,
        FULFILLED: `${type}_FULFILLED`,
        SUCCESS: `${type}_SUCCESS`,
        FAILURE: `${type}_FAILURE`,
    };
}

export const FETCH_TRANSACTIONDATA = createAsyncConst('FETCH_TRANSACTIONDATA');

export const ROOT_URL = '';

export const SCHEDULESTATUSTYPE = {
    STARTED: "STARTED",
    STOPPED: "STOPPED",
    RUNNING: "RUNNING",
    NOT_RUNNING : "NOT_RUNNING"
}

export const API_URL_CONTEXT = {
    //Transactions List API URL
    TRANSACTIONDATA: "/transactions-list",
}