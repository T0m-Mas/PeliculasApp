import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '5ef46ee3445b20230a777636f5a0dc36',
    language: 'es-ES',
  },
});

export default movieDB;
