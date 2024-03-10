import { FaTimes } from "react-icons/fa";
import { useReviewContext } from "../components/ReviewContext";

function ReviewItem({ review }) {
  const { deleteReview } = useReviewContext();

  return (
    <>
    <div className="card-container">
      <div className="card">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={() => deleteReview(review.id)}>
          <FaTimes />
        </button>
      </div>
      </div>
    </>
  );
}

export default ReviewItem;
