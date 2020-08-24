import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {CountButton, CounterLayout} from '../components';
import store from '../store';

const Counter = ({count, onAdjustPoints}) => (
    <CounterLayout
        count={count}
        addTen={<CountButton changeCount={onAdjustPoints} amount={10} />}
        addOne={<CountButton changeCount={onAdjustPoints} amount={1} />}
        subtractTen={<CountButton changeCount={onAdjustPoints} amount={-10} />}
        subtractOne={<CountButton changeCount={onAdjustPoints} amount={-1} />}
    />
);

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onAdjustPoints: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {playerIndex}) => ({
    count: store.getPlayerScore(state, playerIndex),
});

const mapDispatchToProps = (dispatch, {playerIndex}) => ({
    onAdjustPoints: (amount) => dispatch(store.adjustPoints(playerIndex, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
