import { useState, useEffect } from 'react';
import { GetTrends } from 'API';
import { Link } from 'react-router-dom';

export const Trend = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    GetTrends().then(r => setMovieList(r));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {movieList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movie/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
