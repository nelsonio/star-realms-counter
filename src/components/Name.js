import React from 'react';
import PropTypes from 'prop-types';

import styles from './Name.module.css';

const Name = ({name, onNameChange}) => (
    <input type="text" value={name} onChange={(e) => onNameChange(e.target.value)} className={styles.main} placeholder="Player" />
);

Name.propTypes = {
    name: PropTypes.string,
    onNameChange: PropTypes.func.isRequired,
};

Name.defaultProps = {
    name: undefined,
};

export default Name;
