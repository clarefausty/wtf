import React from 'react';
import ReviewForm from '../ReviewForm';


const AllReviews = ({handleAddReview}) => {
  return (
    <div>
      <p>All Reviews</p>
      <ReviewForm handleAdd={handleAddReview} />
    </div>
  );
};

export default AllReviews;
