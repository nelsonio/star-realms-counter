export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const ADJUST_POINTS = 'ADJUST_POINTS';

export const setPlayerName = (index, name) => ({
    type: SET_PLAYER_NAME,
    index,
    name,
});

export const adjustPoints = (index, amount) => ({
    type: ADJUST_POINTS,
    index,
    amount,
});
