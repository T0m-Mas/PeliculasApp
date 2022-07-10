import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ValorationVisor} from '../components/ValorationVisor';
import {imageUri} from '../helpers/ImageColors';
import {RootStackParams} from '../navigation/Navigation';
import globals from '../styles/globals';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {useMovieCast} from '../hooks/useMovieCast';
import {CrewList} from '../components/CrewList';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  const {movie, color} = route.params;
  const dim = useWindowDimensions();

  const {isLoading, genres, production_companies, production_countries} =
    useMovieDetails({id: movie.id});

  const {crew, cast} = useMovieCast(movie.id);

  return (
    <View style={globals.mainScreen}>
      <ImageBackground
        source={{uri: imageUri + movie.poster_path}}
        style={{height: dim.height}}>
        <ScrollView>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'black']}
            start={{x: 0, y: 0.5}}
            end={{x: 0, y: 0.9}}
            style={{
              paddingTop: dim.height * 0.8,
            }}>
            <Text style={styles.title}>{movie.title}</Text>
          </LinearGradient>
          <View style={styles.description}>
            <LinearGradient
              colors={['black', color]}
              start={{x: 0.8, y: 0}}
              end={{x: 1, y: 9}}
              style={styles.descriptionContainer}>
              <Text style={styles.originalTitle}>{movie.original_title}</Text>
              <Text style={styles.text}>{movie.overview}</Text>
              {!isLoading && (
                <Text style={styles.genres}>
                  {genres.map(item => item.name + ' ')}
                </Text>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <View>
                  <Text style={styles.text}>
                    {new Date(movie.release_date).toLocaleDateString()}
                  </Text>
                  {!isLoading && (
                    <>
                      {production_companies.map(item => (
                        <Text key={item.logo_path} style={styles.productions}>
                          {item.name}
                        </Text>
                      ))}
                    </>
                  )}
                  {!isLoading && (
                    <>
                      {production_countries.map(item => (
                        <Text key={item.name} style={styles.country}>
                          {item.name}
                        </Text>
                      ))}
                    </>
                  )}
                </View>
                <ValorationVisor valoration={movie.vote_average} />
              </View>
              {!isLoading && <CrewList cast={cast} />}
              {!isLoading && <CrewList crew={crew} />}
            </LinearGradient>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    marginBottom: 15,
    lineHeight: 32,
    marginLeft: 10,
  },
  originalTitle: {
    color: 'white',
    opacity: 0.6,
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 5,
  },
  text: {
    color: 'white',
  },
  productions: {
    color: 'white',
    marginVertical: -2,
  },
  country: {
    fontSize: 10,
    color: 'white',
    opacity: 0.6,
    marginVertical: -1,
  },
  genres: {
    marginTop: 5,
    opacity: 0.6,
    color: 'white',
    fontSize: 11,
    fontStyle: 'italic',
  },
  description: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0,0, 0.8)',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
});
