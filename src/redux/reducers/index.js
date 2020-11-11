import { combineReducers } from 'redux';
import { authorizationReducer } from './authorizationReducer';
import { modalReducer } from './modalReducer';
import {tableReducer} from './tableReducer';


const mainReducer = combineReducers({
  tableReducer, authorizationReducer, modalReducer
})

export default mainReducer;

