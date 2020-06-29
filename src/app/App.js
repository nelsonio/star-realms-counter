import React from 'react';

import {AppLayout} from '../components';
import Player from './Player';
import Settings from './SettingsContainer';

const App = () => (
    <AppLayout settings={<Settings />}>
        <Player playerIndex={0} />
        <Player playerIndex={1} />
    </AppLayout>
);

export default App;
