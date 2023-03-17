import React from 'react';
import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar';
import { GetMoviesByName } from 'API';
import { MoviesList } from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');

  function handleSubmit(value) {
    setSearchParams(value !== '' ? { query: value } : {});
  }

  useEffect(() => {
    if (query) {
      GetMoviesByName(query).then(r => setMovies(r.results));
    }
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />

      <MoviesList movies={movies} />
      {movies.length === 0 && query !== null && (
        <FailureText>Nothing found on your request</FailureText>
      )}
    </div>
  );
};

const FailureText = styled.h2`
  text-align: center;
`;
