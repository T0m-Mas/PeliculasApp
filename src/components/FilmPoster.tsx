import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import ImageColors from 'react-native-image-colors';
// import {AndroidImageColors} from 'react-native-colors';
import {Movie} from '../interfaces/movieInterfaces';
import {RootStackParams} from '../navigation/Navigation';
// import {useEffect} from 'react';

interface Props {
  movie: Movie;
  width?: number;
  shadowColor?: string;
  noNavigate?: boolean;
}

export const FilmPoster = ({movie, width = 300, noNavigate}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [shadowColor, setShadowColor] = useState('#fff');
  const [shadowRadius, setShadowRadius] = useState(width * 0.06);

  const getColor = async () => {
    const result = await ImageColors.getColors(
      'https://image.tmdb.org/t/p/w500' + movie.poster_path,
      {
        fallback: '#ffffff',
        cache: true,
        key: movie.id.toString(),
      },
    );

    if (result.platform === 'android') {
      setShadowColor(result.vibrant ? result.vibrant : '#ffffff');
    } else if (result.platform === 'ios') {
      setShadowColor(result.primary);
    }
  };

  useEffect(() => {
    getColor();
  }, []);

  return (
    <DropShadow
      style={{
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius,
      }}>
      <TouchableHighlight
        onPress={() =>
          !noNavigate
            ? navigation.navigate('DetailScreen', {movie, color: shadowColor})
            : ''
        }
        activeOpacity={!noNavigate ? 0.8 : 1}
        underlayColor={shadowColor}
        style={{
          ...styles.main,
          width,
          borderRadius: width * 0.05,
        }}>
        <Image
          source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
          style={{flex: 1}}
        />
      </TouchableHighlight>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  main: {
    aspectRatio: 2 / 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
});
