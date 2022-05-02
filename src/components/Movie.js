import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Movie.module.css';
function Movie({ id, coverImg, title, year, runtime, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>{title}</h2>
        <span className={styles.movie__year}>{year}</span>
        <span className={styles.movie__runtime}>
          {parseInt(runtime / 60)}
          <span> H </span>
          {runtime % 60}
          <span> M </span>
        </span>

        <ul className={styles.movie__genres}>
          <li>
            {genres
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .join(' / ')}
          </li>
        </ul>
      </div>
      <button className={styles.button}>
        <Link to={`/movieApp/${id}`}>VIEW DETAIL</Link>
      </button>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default Movie;
