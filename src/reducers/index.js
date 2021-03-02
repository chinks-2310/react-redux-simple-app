import { combineReducers } from 'redux';
import counter from './countReducer';
import lightswitch from './lightswitchReducer';

export default combineReducers({
    counter,
    lightswitch
})