import { useReviewContext } from '../ReviewContext';
import ReviewForm from '../ReviewForm';

function Review() {
  const { addReview } = useReviewContext();

  return (
    <>
      <ReviewForm addReview={addReview} />
    </>
  );
}

export default Review;
