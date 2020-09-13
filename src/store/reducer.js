import {combineReducers} from 'redux';
import {List} from 'immutable';

import {SET_PLAYER_NAME, ADJUST_POINTS} from './actions';
import {getNames, getScore, updateStorageNames, updateStorageScore} from '../utils/localStorage';

const storageNames = getNames();
const storageScore = getScore();

const players = (state = List(storageNames), action) => {
    if (action.type === SET_PLAYER_NAME) {
        const updatedState = state.set(action.index, action.name);
        updateStorageNames(updatedState);
        return updatedState;
    } else {
        return state;
    }
};

const score = (state = List(storageScore), action) => {
    if (action.type === ADJUST_POINTS) {
        const updatedState = state.update(action.index, (prevCount) => prevCount + action.amount);
        updateStorageScore(updatedState);
        return updatedState;
    } else {
        return state;
    }
};

export default combineReducers({players, score});
