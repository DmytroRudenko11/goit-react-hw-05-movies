import { useState, useEffect } from 'react';
import { ReviewsByID } from 'API';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewsByID(id).then(r => setReviews(r));
  }, [id]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <>
          <h3>Reviews</h3>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>There are no reviews yet</p>
      )}
    </div>
  );
};

export default Reviews;
