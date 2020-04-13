import { combineReducers } from 'redux';
import { loadDataReducer, loadCanadaDataReducer, loadMapDataReducer } from './data.reducer';

const rootReducer = combineReducers({
    loadDataReducer,
    loadCanadaDataReducer,
    loadMapDataReducer
});

export default rootReducer;