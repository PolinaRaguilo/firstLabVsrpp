import { combineReducers } from 'redux';
import { authorizationReducer } from './authorizationReducer';
import {tableReducer} from './tableReducer';


const mainReducer = combineReducers({
  tableReducer, authorizationReducer
})

export default mainReducer;

