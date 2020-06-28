import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppLayout.module.css';

const AppLayout = ({children}) => <section className={styles.main}>{children}</section>;

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
