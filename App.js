import React from 'react';

import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Game from './components/Game';

const App = createStackNavigator({
    Home: { screen: Home},
    Game: { screen: Game}
})

export default App;