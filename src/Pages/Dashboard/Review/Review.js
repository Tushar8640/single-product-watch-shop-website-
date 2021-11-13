import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [stars, setStars] = useState(null);
  const [reviews, setReviews] = useState("");

  const getStars = (e) => {
    setStars(e.target.value);
  };

  const getReviews = (e) => {
    setReviews(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const data = { stars, reviews, name };

    // users review 
    fetch("https://damp-beach-22722.herokuapp.com/postreview", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Thanks For Your Feedback");
      });
    console.log(data);
  };
  return (
    <div className="flex flex-col mx-auto max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-coolGray-50 text-coolGray-800">
      <div className="flex flex-col  justify-center items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
        </div>
        <div className="w-full">
          <form onSubmit={handleOnSubmit} className="flex flex-col ">
            <input
              step="any"
              placeholder="Your Ratings (0-5)"
              className="p-4 rounded-md mb-3"
              type="number"
              max="5"
              min="0"
              onBlur={getStars}
            />
            <textarea
              onBlur={getReviews}
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none"
              spellcheck="false"

            ></textarea>
            <button
              type="submit"
              className="btn-regular my-8 font-semibold rounded-md t"
            >
              Leave feedback
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/" className="text-sm text-coolGray-600">
          Maybe later
        </Link>
      </div>
    </div>
  );
};

export default Review;
