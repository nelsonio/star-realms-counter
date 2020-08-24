import React from 'react';
import PropTypes from 'prop-types';
import {faAngleUp, faAngleDoubleUp, faAngleDown, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

import styles from './CountButton.module.css';
import Icon from './Icon';

const getIcon = (amount) => {
    if (amount > 1) {
        return faAngleDoubleUp;
    } else if (amount === 1) {
        return faAngleUp;
    } else if (amount === -1) {
        return faAngleDown;
    } else {
        return faAngleDoubleDown;
    }
};

const CountButton = ({changeCount, amount}) => {
    const icon = getIcon(amount);
    return <Icon icon={icon} onClick={() => changeCount(amount)} className={styles.main} />;
};

CountButton.propTypes = {
    changeCount: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
};

export default CountButton;
