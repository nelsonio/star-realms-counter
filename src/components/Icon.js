import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Icon.module.css';
import classNames from 'classnames';

const Icon = ({onClick, icon, className}) => (
    <FontAwesomeIcon
        icon={icon}
        onClick={onClick}
        className={classNames(className, styles.main)}
    />
);

Icon.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.object.isRequired,
    className: PropTypes.string,
};

Icon.defaultProps = {
    onClick: null,
    className: null,
};

export default Icon;
