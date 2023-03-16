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
    <div>
      {cast ? (
        <>
          <h3>Cast</h3>
          <ul>
            {cast.map(({ character, id, name, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
                <p>Character: {character}</p>
                <p>Actor: {name}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There is no info about cast</p>
      )}
    </div>
  );
};
