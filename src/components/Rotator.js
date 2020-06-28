import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons';

import styles from './Rotator.module.css';
import Icon from './Icon';

const Rotator = ({children}) => {
    const [rotation, setRotation] = useState(0);
    const rotate = () => setRotation((rotation + 90) % 360);
    console.log(rotation);
    return (
        <div className={styles.main}>
            <Icon icon={faSyncAlt} onClick={rotate} className={classNames(styles.fullSize, styles.button)} />
            <div
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}
                className={classNames(styles.fullSize, styles.component)}
            >
                {children}
            </div>
        </div>
    );
};

Rotator.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Rotator;
