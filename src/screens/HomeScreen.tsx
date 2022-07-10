import React from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {LoadingScreen} from '../components/LoadingScreen';
import {FilmPoster} from '../components/FilmPoster';
import globals from '../styles/globals';
import Carousel from 'react-native-snap-carousel';
import {MovieList} from '../components/MovieList';

export const HomeScreen = () => {
  const {nowPlaying, topRated, popular, upcoming, isLoading} = useMovies();

  if (isLoading) return <LoadingScreen />;

  return (
    <View style={globals.mainScreen}>
      <ScrollView>
        <MovieList data={nowPlaying} width={250} main />
        <MovieList data={upcoming} width={120} title="Proximos Estrenos" />
        <MovieList data={popular} width={90} title="Populares" />
        <MovieList data={topRated} width={90} title="Mejor Valoradas" />
      </ScrollView>
    </View>
  );
};
