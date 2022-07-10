import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieCreditsResult} from '../interfaces/movieInterfaces';

export const useMovieCast = (id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detais, setDetails] = useState<MovieCreditsResult>({
    id: -1,
    cast: [],
    crew: [],
  });

  const getMovies = async () => {
    const res = await movieDB.get<MovieCreditsResult>('/' + id + '/credits');
    setDetails(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...detais,
    isLoading,
  };
};
