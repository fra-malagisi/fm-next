import { Movie } from 'models/movie';
import Image from 'next/image';
import { FC } from 'react';

import styles from './movie-box.module.css';

export type MovieBoxProps = {
  movie: Movie;
};

const MovieBox: FC<MovieBoxProps> = ({ movie }) => {
  return (
    <article className={styles['movie-box']} role='button'>
      <div className={styles['movie-box__image']}>
        <Image src={movie.imgSrc} alt={`${movie.title} image`} width={100} height={150} layout='responsive' />
      </div>
      <div className={styles['movie-box__content']}>
        <p>{movie.overview}</p>
      </div>
    </article>
  );
};

export default MovieBox;
