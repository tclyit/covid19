export const LOAD_DATA_ACTION = 'LOAD_DATA_ACTION';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_CANADA_DATA_ACTION = 'LOAD_CANADA_DATA_ACTION';
export const LOAD_CANADA_DATA_SUCCESS = 'LOAD_CANADA_DATA_SUCCESS';
export const LOAD_MAP_DATA_ACTION = 'LOAD_MAP_DATA_ACTION';
export const LOAD_MAP_DATA_SUCCESS = 'LOAD_MAP_DATA_SUCCESS';

const loadDataAction = () => {
    return {
        type: LOAD_DATA_ACTION
    };
};

const loadDataSuccessAction = (payload) => {
    return {
        type: LOAD_DATA_SUCCESS,
        payload: payload
    };
};

const loadCanadaDataAction = () => {
    return {
        type: LOAD_CANADA_DATA_ACTION
    };
};

const loadCanadaDataSuccessAction = (payload) => {
    return {
        type: LOAD_CANADA_DATA_SUCCESS,
        payload: payload
    };
};

const loadMapDataAction = () => {
    return {
        type: LOAD_MAP_DATA_ACTION
    };
};

const loadMapDataSuccessAction = (payload) => {
    return {
        type: LOAD_MAP_DATA_SUCCESS,
        payload: payload
    };
};

export const actions = {
    loadDataAction,
    loadDataSuccessAction,
    loadCanadaDataAction,
    loadCanadaDataSuccessAction,
    loadMapDataAction,
    loadMapDataSuccessAction
};