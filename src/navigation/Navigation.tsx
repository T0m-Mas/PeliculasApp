import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    movie: Movie;
    color: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        animationEnabled: true,
        detachPreviousScreen: true,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
