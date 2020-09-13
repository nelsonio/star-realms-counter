const DEFAULT_COUNT = 2;
const NAMES_KEY = 'names';
const SCORE_KEY = 'score';
const SEPARATOR = ';';

export const getNames = () => localStorage.getItem(NAMES_KEY)?.split(SEPARATOR) || new Array(DEFAULT_COUNT);
export const getScore = () => localStorage.getItem(SCORE_KEY)?.split(SEPARATOR) || new Array(DEFAULT_COUNT).fill(50);

const updateStorage = (KEY) => (list) => {
    localStorage.setItem(KEY, list.join(SEPARATOR));
};

export const updateStorageNames = updateStorage(NAMES_KEY);
export const updateStorageScore = updateStorage(SCORE_KEY);
