import ReviewItem from "./ReviewItem";
import { useReviewContext } from "../components/ReviewContext";

function ReviewList({review, deleteReview}) {
  // const { review, deleteReview } = useReviewContext();

  if (!review || review.length === 0) {
    return <p>No review yet!</p>;
  }

  return (
    <>
      <div className="ReviewList">
        {review.map((item) => (
          <div key={item.id}>
            <ReviewItem review={item} deleteReview={deleteReview} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewList;
