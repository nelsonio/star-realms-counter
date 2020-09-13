import React from 'react';

import {AppLayout} from '../components';
import Settings from './SettingsContainer';
import Player from './Player';

const App = () => (
    <AppLayout settings={<Settings />}>
        <Player playerIndex={0} />
        <Player playerIndex={1} />
    </AppLayout>
);

export default App;
