import {setPlayerName, adjustPoints, resetPoints} from './actions';
import {getPlayerName, getPlayerScore} from './selectors';
import reducer from './reducer';

export default {
    setPlayerName,
    adjustPoints,
    resetPoints,

    getPlayerName,
    getPlayerScore,

    reducer,
};
