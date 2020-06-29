import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({onClick, label}) => (
    <button onClick={onClick} className={styles.main}>
        {label}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default Button;
