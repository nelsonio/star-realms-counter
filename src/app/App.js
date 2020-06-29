import React from 'react';

import {AppLayout} from '../components';
import Player from './Player';
import Settings from './SettingsContainer';

const App = () => (
    <AppLayout settings={<Settings />}>
        <Player />
        <Player />
    </AppLayout>
);

export default App;
