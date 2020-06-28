import React from 'react';
import PropTypes from 'prop-types';

import styles from './CountButton.module.css';

const CountButton = ({changeCount, amount, disabled}) => (
    <button type="button" onClick={() => changeCount(amount)} disabled={disabled} className={styles.main}>
        {`${amount > 0 ? '+' : ''}${amount}`}
    </button>
);

CountButton.propTypes = {
    changeCount: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
};

CountButton.defaultProps = {
    disabled: false,
};

export default CountButton;
