import {combineReducers} from 'redux';
import {List} from 'immutable';

import {SET_PLAYER_NAME, ADJUST_POINTS} from './actions';
import {getNames} from '../utils/localStorage';

const names = getNames();
// score - map

const players = (state = List(names), action) => {
    if (action.type === SET_PLAYER_NAME) {
        return state.set(action.index, action.name);
    } else {
        return state;
    }
};

const score = (state = List([50, 50]), action) => {
    switch (action.type) {
        case ADJUST_POINTS:
            return state.update(action.index, (prevCount) => prevCount + action.amount);
        default:
            return state;
    }
};

export default combineReducers({players, score});
