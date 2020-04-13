import * as actions from '../actions/load-data.action';

export const loadDataReducer = (state = { loading: false }, action) => {
    switch(action.type) {
        case actions.LOAD_DATA_ACTION:
            return {
                ...state,
                loading: false
            };
        case actions.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        default:
            return state;
    }
};

export const loadCanadaDataReducer = (state = {loading: false}, action) => {
    switch(action.type) {
        case actions.LOAD_CANADA_DATA_ACTION:
            return {
                ...state,
                loading: false
            };
        case actions.LOAD_CANADA_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        default:
            return state;
    }
}

export const loadMapDataReducer = (state = {loading: false}, action) => {
    switch(action.type) {
        case actions.LOAD_MAP_DATA_ACTION:
            return {
                ...state,
                loading: false
            };
        case actions.LOAD_MAP_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: true
            };
        default:
            return state;
    }
}