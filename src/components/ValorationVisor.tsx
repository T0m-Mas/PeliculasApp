import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  valoration: number | undefined;
}

export const ValorationVisor = ({valoration}: Props) => {
  let color = '#000000';

  if (valoration != undefined) {
    if (valoration > 9) {
      color = 'lightgreen';
    } else if (valoration >= 8) {
      color = 'green';
    } else if (valoration >= 5) {
      color = 'yellow';
    } else if (valoration >= 2) {
      color = 'orange';
    } else {
      color = 'red';
    }
  }

  return valoration !== undefined ? (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          borderColor: color,
          borderWidth: 5,
          borderRadius: 100,
          width: 50,
          height: 50,
          marginLeft: 10,
        }}>
        <Text
          style={{
            color: 'white',
            opacity: 1,
            fontSize: 15,
            textAlign: 'center',
          }}>
          {valoration}
        </Text>
      </View>
    </View>
  ) : (
    <></>
  );
};
