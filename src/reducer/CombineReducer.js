import { combineReducers } from 'redux';
import phonebookReducer from './PhoneBookReducer';

const CombineReducer = combineReducers({
  phonebook: phonebookReducer,
});

export default CombineReducer;
