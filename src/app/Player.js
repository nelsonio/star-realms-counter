import React, {useState} from 'react';

import {Name, PlayerLayout, Rotator} from '../components';
import Counter from './Counter';

const Player = () => {
    const [name, setName] = useState('');

    return (
        <Rotator>
            <PlayerLayout name={<Name name={name} onNameChange={setName} />} counter={<Counter />} />
        </Rotator>
    );
};

Player.propTypes = {};

export default Player;
