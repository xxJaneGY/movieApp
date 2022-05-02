import { Torrents } from './common';
export interface MoviesDetailsInfo {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  download_count: string;
  like_count: string;
  description_intro?: string;
  description_full?: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: '';
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  torrents: Torrents[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface MovieDetailsData {
  movie: MoviesDetailsInfo;
}

export interface MovieDetailsList {
  status: string;
  status_message: string;
  data: MovieDetailsData;
}
