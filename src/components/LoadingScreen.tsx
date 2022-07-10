import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import globals from '../styles/globals';

export const LoadingScreen = () => {
  return (
    <View
      style={{
        ...globals.mainScreen,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <ActivityIndicator color={'#0099fb'} size="large" />
        <Text
          style={{
            color: '#444444',
            marginTop: 10,
          }}>
          Cargando :3
        </Text>
      </View>
    </View>
  );
};
