import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Name, PlayerLayout, Rotator} from '../components';
import Counter from './Counter';

const NAMES_KEY = 'names';
const SEPARATOR = ';';

const updateNames = (names, newName, playerIndex) => {
    if (names.length >= playerIndex + 1) {
        return names.map((originalName, index) => (index === playerIndex ? newName : originalName));
    } else {
        const updatedNames = [...names];
        updatedNames[playerIndex] = newName;
        return updatedNames;
    }
};

const Player = ({playerIndex}) => {
    const names = localStorage.getItem(NAMES_KEY)?.split(SEPARATOR);
    console.log(names);
    const [name, setName] = useState(names[playerIndex]);

    const changeName = (newName) => {
        setName(newName);
        const newNames = new Array(playerIndex + 1);
        newNames[playerIndex] = newName;
        const updatedNames = names ? updateNames(names, newName, playerIndex) : newNames;
        localStorage.setItem(NAMES_KEY, updatedNames.join(SEPARATOR));
    };

    return (
        <Rotator>
            <PlayerLayout name={<Name name={name} onNameChange={changeName} />} counter={<Counter />} />
        </Rotator>
    );
};

Player.propTypes = {
    playerIndex: PropTypes.number.isRequired,
};

export default Player;
