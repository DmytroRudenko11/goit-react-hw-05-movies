import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { MovieByID } from 'API';
import Posterplaceholder from '../../images/Posterplaceholder.png';

const SelectedMovie = () => {
  const location = useLocation();
  const wayBack = location.state?.from ?? '/';
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    MovieByID(id).then(r => setMovieData(r));
  }, [id]);

  return (
    <Container>
      <GoBackBtn>
        <LinkBtn to={wayBack}>Go Back</LinkBtn>
      </GoBackBtn>
      {movieData ? (
        <ContentContainer>
          <MovieContainer>
            <Image
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                  : Posterplaceholder
              }
              alt="poster"
            />
            <div>
              <h1>{movieData.title}</h1>
              <p>Average votes: {movieData.vote_average}</p>
              <h2>Overview</h2>
              <OverviewText>{movieData.overview}</OverviewText>
              {movieData.genres && (
                <div>
                  <h2>Genres</h2>
                  <ul>
                    {movieData.genres.map(({ name }) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </MovieContainer>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Links to="cast" preventScrollReset>
                  Cast
                </Links>
              </li>
              <li>
                <Links to="reviews" preventScrollReset>
                  Reviews
                </Links>
              </li>
            </ul>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </ContentContainer>
      ) : (
        <h1>No data</h1>
      )}
    </Container>
  );
};

export default SelectedMovie;

const Container = styled.section`
  padding: 20px;
  padding-top: 40px;
  width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GoBackBtn = styled.button`
  padding: 0;
  /* margin-left: 40px; */
  background: #65000b;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const LinkBtn = styled(Link)`
  color: white;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #65000b;
`;

const ContentContainer = styled.div`
  padding-top: 40px;
`;

const MovieContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 25%;
  height: auto;
`;

const OverviewText = styled.p`
  max-width: 600px;
`;

const Links = styled(Link)`
  color: #65000b;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #cc0000;
    text-decoration: underline;
  }
`;
