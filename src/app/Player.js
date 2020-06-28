import React, {useState} from 'react';

import {Name, PlayerLayout} from '../components';
import Counter from './Counter';

const Player = () => {
    const [name, setName] = useState('');

    return <PlayerLayout name={<Name name={name} onNameChange={setName} />} counter={<Counter />} />;
};

Player.propTypes = {};

export default Player;
