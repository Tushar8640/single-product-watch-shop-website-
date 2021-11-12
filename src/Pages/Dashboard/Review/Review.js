import React, { useState } from "react";

const Review = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleTOggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <h1 className="text-center text-2xl">Review Page</h1>
      <h1 className="text-2xl text-center">Toggle</h1>

      <button
        onClick={handleTOggle}
        className="bg-gray-600 text-gray-50 px-3 py-1 m-4"
      >
        toggle button
      </button>
      <div className={`text-xl my-12 flex `}>
        <div className={`${isToggle ? "w-1/3 bg-white" : "hidden"} `}>
          <ul>
            <li>Toggle content</li>
            <li>Toggle content</li>
            <li>Toggle content</li>
            <li>Toggle content</li>
            <li>Toggle content</li>
          </ul>
        </div>
        <div className="w-full">
          <ul>
            <li>Main content</li>
            <li>Main content</li>
            <li>Main content</li>
            <li>Main content</li>
            <li>Main content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
