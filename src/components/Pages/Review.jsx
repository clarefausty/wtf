import { useReviewContext } from '../ReviewContext';
import ReviewForm from '../ReviewForm';
import { FaHouseDamage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Review() {
  const { addReview } = useReviewContext();

  return (
    <>
      <ReviewForm addReview={addReview} />

      <div className="about-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
    </>
  );
}

export default Review;
