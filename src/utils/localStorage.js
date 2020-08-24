const DEFAULT_COUNT = 2;
const NAMES_KEY = 'names';
const SEPARATOR = ';';

export const getNames = () => localStorage.getItem(NAMES_KEY)?.split(SEPARATOR) || new Array(DEFAULT_COUNT);

export const updateStorageNames = (playerIndex, newName) => {
    const names = getNames();
    const updatedNames = [...names];
    updatedNames[playerIndex] = newName;
    localStorage.setItem(NAMES_KEY, updatedNames.join(SEPARATOR));
}
