import { useReviewContext } from "../components/ReviewContext";

function ReviewStats({review}) {
 

  // Sum of the total reviews rating and divided by the total length of the array
  // The output is converted to a single decimal place.
  let average =
    review.length > 0
      ? (
          review.reduce((acc, cur) => {
            return acc + cur.rating;
          }, 0) / review.length
        ).toFixed(1)
      : 0;

  return (
    <>
      <div className="review-stats">
        <p>Reviews: {review.length}</p>
        <p>Average: {isNaN(average) ? 0 : average}</p>
      </div>
    </>
  );
}

export default ReviewStats;
