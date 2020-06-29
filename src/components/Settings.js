import React from 'react';
import PropTypes from 'prop-types';
import {faCog, faTimes} from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';
import styles from './Settings.module.css';

const Settings = ({children, open, setOpen}) => {
    return open ? (
        <div className={styles.settings}>
            <div className={styles.content}>{children}</div>
            <Icon icon={faTimes} onClick={() => setOpen(false)} className={styles.closeIcon} />
        </div>
    ) : (
        <Icon icon={faCog} onClick={() => setOpen(true)} className={styles.openIcon} />
    );
};

Settings.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default Settings;
