import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import image from '../../../images/image.jpg';
import { CastByID } from 'API';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    CastByID(id).then(r => setCast(r));
  }, [id]);

  return (
    <div>
      {cast ? (
        <>
          <h3>Cast</h3>
          <List>
            {cast.map(({ character, credit_id, name, profile_path }) => (
              <Item key={credit_id}>
                <Image
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : image
                  }
                  alt={name}
                />
                <p>Character: {character}</p>
                <p>Actor: {name}</p>
              </Item>
            ))}
          </List>
        </>
      ) : (
        <p>There is no info about cast</p>
      )}
    </div>
  );
};

export default Cast;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.li`
  width: calc(100% - 60px) / 4;
`;

const Image = styled.img`
  width: 250px;
  height: 375px;
`;
