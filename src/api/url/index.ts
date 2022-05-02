import { MovieDetailsList } from '../../interface/movieDetail';
import { MoviesInfo } from '../../interface/movie';
import axios, { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

export const api = axios.create({ baseURL: 'https://yts.mx/api/v2' });

api.interceptors.response.use(
  (response) => {
    return {
      ...response,
      data: camelcaseKeys(response.data, { deep: true }),
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getMoviesApi = async () => {
  const { data }: AxiosResponse<MoviesInfo[]> = await api.get(
    'list_movies.json?minimum_rating=9.0&sort_by=year'
  );
  return data;
};

export const getMovieDetailsApi = async (movieId: number) => {
  const { data }: AxiosResponse<MovieDetailsList> = await api.get(
    `movie_details.json?movie_id=${movieId}`
  );
  return data;
};
