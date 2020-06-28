import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Icon.module.css';
import classNames from 'classnames';

const Icon = ({onClick, icon, className, disabled}) => (
    <FontAwesomeIcon
        icon={icon}
        onClick={disabled ? () => {} : onClick}
        className={classNames(className, styles.main, {[styles.disabled]: disabled})}
    />
);

Icon.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Icon.defaultProps = {
    onClick: null,
    className: null,
    disabled: false,
};

export default Icon;
