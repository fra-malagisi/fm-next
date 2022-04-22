import mongoose from 'mongoose';

export type MovieBe = {
  _id: string;
  Poster_Link: string;
  Series_Title: string;
  Released_Year: number;
  Certificate: string;
  Runtime: number;
  Genre: string;
  IMDB_Rating: number;
  Overview: string;
  Meta_score: number;
  Director: string;
  Star1: string;
  Star2: string;
  Star3: string;
  Star4: string;
  No_of_Votes: number;
  Gross: string;
};

export type Movie = {
  id: string;
  imgSrc: string;
  title: string;
  releasedYear: number;
  certificate: string;
  runtime: number;
  genre: string;
  imdbRating: number;
  overview: string;
  metaScore: number;
  director: string;
  star1: string;
  star2: string;
  star3: string;
  star4: string;
  noOfVotes: number;
  gross: string;
};

const MovieSchema = new mongoose.Schema({
  Poster_Link: {
    type: String,
  },
  Series_Title: {
    type: String,
    required: [true, "Please provide the film's name"],
  },
  Released_Year: {
    type: Number,
    required: [true, 'Please provide a release year'],
  },
  Certificate: {
    type: String,
  },
  Runtime: {
    type: Number,
  },
  Genre: {
    type: String,
  },
  IMDB_Rating: {
    type: Number,
  },
  Overview: {
    type: String,
  },
  Meta_score: {
    type: Number,
  },
  Director: {
    type: String,
  },
  Star1: {
    type: String,
  },
  Star2: {
    type: String,
  },
  Star3: {
    type: String,
  },
  Star4: {
    type: String,
  },
  No_of_Votes: {
    type: Number,
  },
  Gross: {
    type: String,
  },
});

export default mongoose.models.movies || mongoose.model('movies', MovieSchema);
