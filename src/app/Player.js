import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import store from '../store';
import {Name, PlayerLayout, Rotator} from '../components';
import Counter from './Counter';

const Player = ({name, playerIndex, onSetPlayerName}) => (
    <Rotator>
        <PlayerLayout name={<Name name={name} onNameChange={onSetPlayerName} />} counter={<Counter playerIndex={playerIndex} />} />
    </Rotator>
);

Player.propTypes = {
    playerIndex: PropTypes.number.isRequired,
    onSetPlayerName: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {playerIndex}) => ({
    name: store.getPlayerName(state, playerIndex),
});

const mapDispatchToProps = (dispatch, {playerIndex}) => ({
    onSetPlayerName: (name) => dispatch(store.setPlayerName(playerIndex, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
