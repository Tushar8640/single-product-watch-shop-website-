import React, { useEffect, useState } from "react";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allreview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section className="my-8">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews?.map((review) => (
          <div className="flex shadow-sm p-4 flex-col items-center mx-12 lg:mx-0">
            <div className="  text-center">
                <p>{review.stars}</p>
              <p className="px-6   py-1 text-lg italic">
               {review.reviews}
              </p>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
            <p className="font-semibold text-lg ">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
