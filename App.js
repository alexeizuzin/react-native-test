import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import MySceneScreen from './scenes/scene1';
import ProfileScreen from './scenes/scene2';

const App = StackNavigator({
  Home: { screen: MySceneScreen },
  Profile: { screen: ProfileScreen },
});

export default App;



