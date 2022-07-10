import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import {FilmPoster} from './FilmPoster';
import {getColor} from '../helpers/ImageColors';
import {useWindowDimensions} from 'react-native';

interface Props {
  title?: string;
  data: Movie[];
  width?: number;
  height?: number;
  main?: boolean;
}

export const MovieList = ({data, title, width = 140, main = false}: Props) => {
  const dim = useWindowDimensions();
  return (
    <View style={{backgroundColor: 'transparent'}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              ...styles.container,
              width: main ? dim.width : width,
              marginVertical: main ? 40 : 5,
              marginHorizontal: main ? 0 : 10,
            }}>
            <FilmPoster movie={item} width={width} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={main ? 0 : undefined}
        disableIntervalMomentum
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});
