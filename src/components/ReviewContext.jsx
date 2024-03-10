import { createContext, useContext, useState } from 'react';
import data from "../data/reviewData" 
import { v4 as uuid } from "uuid";
const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState(data);

  const deleteReview = (id) => {
    if (window.confirm('Are you sure, you want to delete this review?')) {
      setReview((prevReview) => prevReview.filter((item) => item.id !== id));
    }
  };

  const addReview = (newReview) => {
    newReview.id = uuid();
    setReview((prevReview) => [newReview, ...prevReview]);
  };

  return (
    <ReviewContext.Provider value={{ review, deleteReview, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviewContext must be used within a ReviewProvider');
  }
  return context;
};
