import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MoviesResult} from '../interfaces/movieInterfaces';

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const res = await Promise.all([
      movieDB.get<MoviesResult>('/now_playing'),
      movieDB.get<MoviesResult>('/popular'),
      movieDB.get<MoviesResult>('/top_rated'),
      movieDB.get<MoviesResult>('/upcoming'),
    ]);
    setMovies({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movies,
    isLoading,
  };
};
