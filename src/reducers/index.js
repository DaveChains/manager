/**
 * Created by davidchains on 4/23/17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers ({
    auth: AuthReducer
});