import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetByID } from 'API';

export const SelectedMovie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    GetByID(id).then(r => setMovieData(r));
  }, [id]);
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt=""
        />
        <h1>{movieData.title}</h1>
      </div>
    </div>
  );
};
