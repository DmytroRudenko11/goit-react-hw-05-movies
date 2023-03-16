import { useState, useEffect } from 'react';
import { ReviewsByID } from 'API';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { id } = useParams();
  const [rewiews, setReviews] = useState([]);

  useEffect(() => {
    ReviewsByID(id).then(r => setReviews(r));
  }, [id]);

  return (
    <ul>
      {rewiews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
