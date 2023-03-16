import { useState, useEffect } from 'react';
import { CastByID } from 'API';
import { useParams } from 'react-router-dom';
export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    CastByID(id).then(r => setCast(r));
  }, [id]);

  return (
    <ul>
      {cast.map(({ character, id, name, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
          <p>{character}</p>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
