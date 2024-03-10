import { useState } from "react";
import Button from "./layout/Button";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";


const spanStyle = {
  display: "block",
  fontStyle: "italic",
  marginTop: "10px",
};

function ReviewForm({addReview}) {
  // const { addReview } = useReviewContext();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const [rating, setRating] = useState(7);

  const textHandler = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 20) {
      setMsg("Your review must be above 20 characters");
      setBtnDisabled(true);
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 20) {
      const newReview = {
        text,
        rating,
      };
      addReview(newReview);
      setText("");
    }
  };

  return (
    <>
      <div className="container form-container">
        <div className="card">
          <form onSubmit={formSubmit}>
            <h3>Kindly drop a Review for our service you just experienced.</h3>
            <Rating ratingState={(rating) => setRating(rating)} />
            <br />
            <br />
            <div className="input-group">
              <input
                type="text"
                value={text}
                placeholder="write your review here"
                onChange={textHandler}
              />
              <Button type="submit" variant="secondary" isDisabled={btnDisabled}>
                Submit
              </Button>
            </div>
            {msg && <span className="message" style={spanStyle}>{msg}</span>}
          </form>
        </div>
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate("/allreviews")}
        >
          Go to Reviews
        </Button>
      </div>
    </>
  );
}

export default ReviewForm;
