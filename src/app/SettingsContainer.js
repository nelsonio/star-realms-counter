import React, {useState} from 'react';

import {Button, Settings} from '../components';

const SettingsContainer = () => {
    const [open, setOpen] = useState(false);

    return (
        <Settings open={open} setOpen={setOpen}>
            <Button onClick={() => window.location.reload()} label="Reset points" />
        </Settings>
    );
};

export default SettingsContainer;
