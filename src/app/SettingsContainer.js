import React, {useState} from 'react';
import {Settings} from '../components';

const SettingsContainer = () => {
    const [open, setOpen] = useState(false);

    return (
        <Settings open={open} setOpen={setOpen}>
            TODO: Reset points
        </Settings>
    );
};

export default SettingsContainer;
