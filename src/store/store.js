import {configureStore} from '@reduxjs/toolkit';
import CombineReducer from '../reducer/CombineReducer';

const store = configureStore({
    reducer : {
        phone : CombineReducer
    }
});

export default store;