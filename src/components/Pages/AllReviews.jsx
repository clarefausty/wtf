import { useReviewContext } from '../ReviewContext';
import { FaHouseDamage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReviewList from '../ReviewList';
import ReviewStats from '../ReviewStats';

const AllReviews = () => {
  const { review, deleteReview  } = useReviewContext();

  return (
    <>
      <div>
        <p>All Reviews</p>
        <div className="container allreview-contaner">
        <div className="revew-contaner">
          <ReviewStats review={review} />
          </div>
          <ReviewList review={review} deleteReview ={deleteReview }  />
          
          </div>
        
      </div>

      <div className="about-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
    </>
  );
};

export default AllReviews;
