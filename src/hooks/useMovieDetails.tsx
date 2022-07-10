import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDetails} from '../interfaces/movieInterfaces';

interface Props {
  id: number;
}

export const useMovieDetails = ({id}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detais, setDetails] = useState<MovieDetails>({
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  });

  const getMovies = async () => {
    const res = await movieDB.get<MovieDetails>('/' + id);
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
