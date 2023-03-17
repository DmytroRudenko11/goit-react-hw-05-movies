import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Links to={`/movie/${movie.id}`} state={{ from: location }}>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </Links>
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

const List = styled.ul`
  padding-top: 130px;
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
