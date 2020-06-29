import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import styles from './AppLayout.module.css';

const AppLayout = ({children, settings}) => (
    <Fragment>
        {settings && <div className={styles.settings}>{settings}</div>}
        <section className={styles.main}>{children}</section>
    </Fragment>
);

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    settings: PropTypes.node,
};

AppLayout.defaultProps = {
    settings: null,
};

export default AppLayout;
