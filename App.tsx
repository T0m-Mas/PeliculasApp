import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" hidden />
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
