import React, {useState} from 'react';

import {Name} from '../components';

const NameContainer = () => {
    const [name, setName] = useState('');

    return <Name name={name} onNameChange={setName} />;
};

export default NameContainer;
