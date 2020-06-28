import React from 'react';
import PropTypes from 'prop-types';

import styles from './CounterLayout.module.css';

const CounterLayout = ({count, addOne, addTen, subtractOne, subtractTen}) => (
    <div className={styles.main}>
        {addTen}
        {addOne}
        <h2 className={styles.count}>{count}</h2>
        {subtractTen}
        {subtractOne}
    </div>
);

CounterLayout.propTypes = {
    count: PropTypes.number.isRequired,
    addOne: PropTypes.node.isRequired,
    addTen: PropTypes.node.isRequired,
    subtractOne: PropTypes.node.isRequired,
    subtractTen: PropTypes.node.isRequired,
};

export default CounterLayout;
