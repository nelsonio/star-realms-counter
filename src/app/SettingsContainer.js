import React, {useState} from 'react';
import {connect} from 'react-redux';

import {Button, Settings} from '../components';
import store from '../store';

const SettingsContainer = ({onResetPoints}) => {
    const [open, setOpen] = useState(false);

    return (
        <Settings open={open} setOpen={setOpen}>
            <Button onClick={onResetPoints} label="Reset points" />
        </Settings>
    );
};

const mapDispatchToProps = {
    onResetPoints: store.resetPoints,
};

export default connect(null, mapDispatchToProps)(SettingsContainer);
