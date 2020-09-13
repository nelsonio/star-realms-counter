import {DEFAULT_PLAYER_COUNT, DEFAULT_POINT_COUNT} from './constants';

const NAMES_KEY = 'names';
const SCORE_KEY = 'score';
const SEPARATOR = ';';

export const getNames = () => localStorage.getItem(NAMES_KEY)?.split(SEPARATOR) || new Array(DEFAULT_PLAYER_COUNT);
export const getScore = () =>
    localStorage
        .getItem(SCORE_KEY)
        ?.split(SEPARATOR)
        .map((score) => Number(score)) || new Array(DEFAULT_PLAYER_COUNT).fill(DEFAULT_POINT_COUNT);

const updateStorage = (KEY) => (list) => {
    localStorage.setItem(KEY, list.join(SEPARATOR));
};

export const updateStorageNames = updateStorage(NAMES_KEY);
export const updateStorageScore = updateStorage(SCORE_KEY);
