import { Movie, MovieBe } from 'models/movie';

export const movieConverter = (movieBe: MovieBe): Movie => ({
  imgSrc: movieBe['Poster_Link'],
  title: movieBe['Series_Title'],
  releasedYear: movieBe['Released_Year'],
  certificate: movieBe.Certificate,
  runtime: movieBe.Runtime,
  genre: movieBe.Genre,
  imdbRating: movieBe['Imdb_Rating'],
  overview: movieBe.Overview,
  metaScore: movieBe['Meta_Score'],
  director: movieBe.Director,
  star1: movieBe.Star1,
  star2: movieBe.Star2,
  star3: movieBe.Star3,
  star4: movieBe.Star4,
  noOfVotes: movieBe['No_of_Votes'],
  gross: movieBe.Gross,
});
