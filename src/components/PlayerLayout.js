import React from 'react';
import PropTypes from 'prop-types';

import styles from './PlayerLayout.module.css';

const PlayerLayout = ({name, counter}) => (
    <div className={styles.main}>
        {name}
        {counter}
    </div>
);

PlayerLayout.propTypes = {
    name: PropTypes.node.isRequired,
    counter: PropTypes.node.isRequired,
};

export default PlayerLayout;
