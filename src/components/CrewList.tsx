import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {imageUri} from '../helpers/ImageColors';
import {Cast, Crew} from '../interfaces/movieInterfaces';

interface Props {
  cast?: Cast[];
  crew?: Crew[];
}

export const CrewList = ({cast, crew}: Props) => {
  return (
    <View>
      {cast ? (
        <>
          <Text style={{color: 'white'}}>Elenco:</Text>
          <FlatList
            data={cast.filter(item => item.known_for_department === 'Acting')}
            // data={cast}
            renderItem={({item}) => ActorCard(item)}
            keyExtractor={item => item.cast_id.toString()}
            horizontal
          />
        </>
      ) : (
        <>
          <Text style={{color: 'white'}}>Equipo:</Text>
          <FlatList
            data={crew?.filter(item => staffFilther(item.known_for_department))}
            // data={crew}
            renderItem={({item}) => StaffCard(item)}
            keyExtractor={item => item.credit_id.toString()}
            horizontal
          />
        </>
      )}
    </View>
  );
};

const staffFilther = (item: string) => {
  switch (item) {
    case 'Directing':
      return 'Dirección';
    case 'Writing':
      return 'Escritor';
    case 'Visual Effects':
      return 'Efectos';
    default:
      return false;
  }
};

const StaffCard = (item: Crew) => {
  return (
    <View style={styles.crewCard}>
      <Image
        source={
          item.profile_path
            ? {uri: imageUri + item.profile_path}
            : {uri: defaultImgSrc}
        }
        defaultSource={{uri: defaultImgSrc}}
        style={styles.pic}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.role}>{staffFilther(item.known_for_department)}</Text>
    </View>
  );
};
const ActorCard = (item: Cast) => {
  return (
    <View style={styles.crewCard}>
      <Image
        source={
          item.profile_path
            ? {uri: imageUri + item.profile_path}
            : {uri: defaultImgSrc}
        }
        defaultSource={{uri: defaultImgSrc}}
        style={styles.pic}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const defaultImgSrc =
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80+';

const styles = StyleSheet.create({
  name: {
    color: 'white',
    textAlign: 'center',
  },
  role: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    opacity: 0.6,
    marginTop: -3,
  },
  pic: {
    width: 80,
    aspectRatio: 1 / 1,
  },
  crewCard: {
    alignItems: 'center',
    margin: 5,
    width: 120,
    heigth: 120,
  },
});
