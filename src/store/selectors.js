const getState = (state) => state;

const getPlayerNames = (state) => getState(state)['players'];
export const getPlayerName = (state, playerIndex) => getPlayerNames(state).get(playerIndex);

const getPlayerScores = (state) => getState(state)['score'];
export const getPlayerScore = (state, playerIndex) => getPlayerScores(state).get(playerIndex);
