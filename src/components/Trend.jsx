import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { GetTrends } from 'API';

export const Trend = () => {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    GetTrends().then(r => setMovieList(r));
  }, []);

  return (
    <>
      <HomeTitle>Trending Today</HomeTitle>
      <List>
        {movieList.map(({ id, title, name }) => (
          <li key={id}>
            <Links to={`/movie/${id}`} state={{ from: location }}>
              {title || name}
            </Links>
          </li>
        ))}
      </List>
    </>
  );
};

const HomeTitle = styled.h1`
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 4px 11px rgba(192, 11, 11, 0.6);
`;

const List = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  list-style: none;
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
