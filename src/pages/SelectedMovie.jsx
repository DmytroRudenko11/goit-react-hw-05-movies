import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { MovieByID } from 'API';

export const SelectedMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    MovieByID(id).then(r => setMovieData(r));
  }, [id]);

  return (
    <div>
      {movieData ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt=""
          />
          <h1>{movieData.title}</h1>
          <p>Average votes: {movieData.vote_average}</p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          {movieData.genres && <h2>Genres</h2> && (
            <ul>
              {movieData.genres.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
};
