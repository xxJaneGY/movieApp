import { useState, useEffect } from 'react';
import { getMoviesApi } from '../../api/url';
import { MoviesInfo } from '../../interface/movie';
import Loading from '../Common/Loading';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MoviesInfo[]>([]);

  const getMovies = async () => {
    try {
      setData(await getMoviesApi());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='page page__movie'>
      {loading? (
        <Loading />
      ) : (
        <>
        {data && (
          <div className='list-item'>
            <h1 className='list-item title'>{data.title}</h1>
          </div>
        )}
        </>
      )}
  );
}

export default Movie;
