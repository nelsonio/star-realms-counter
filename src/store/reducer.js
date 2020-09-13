import {combineReducers} from 'redux';
import {List} from 'immutable';

import {SET_PLAYER_NAME, ADJUST_POINTS, RESET_POINTS} from './actions';
import {getNames, getScore, updateStorageNames, updateStorageScore} from '../utils/localStorage';
import {DEFAULT_POINT_COUNT} from '../utils/constants';

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
    switch (action.type) {
        case ADJUST_POINTS: {
            const updatedState = state.update(action.index, (prevCount) => prevCount + action.amount);
            updateStorageScore(updatedState);
            return updatedState;
        }
        case RESET_POINTS: {
            const updatedState = state.map(() => DEFAULT_POINT_COUNT);
            updateStorageScore(updatedState);
            return updatedState;
        }
        default:
            return state;
    }
};

export default combineReducers({players, score});
