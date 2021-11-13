import React from "react";

const Banner = () => {
  return (
    <div className="px-4 bg-gray-200 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col-reverse  items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">
                Brand new
              </p>
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Monitoring Your 
              <br className="hidden md:block" />
              Healthly Enjoyable 
              <span className="inline-block ml-2 text-blue-500">
                 Daily Life
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Introducing New and Smartest Watch to help you stay always active,healthy,and confident.
            </p>
            <button className="btn-regular hover:bg-blue-500 transition duration-200 focus:bg-blue-600 mt-3">Explore More</button>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 my-5">
          <div className="w-8/12 lg:w-9/12 sm:w-6/12 md:w-6/12   lg:-ml-32">
            <img
              className="object-cover "
              src="https://i.ibb.co/t8TH0Dr/pngegg-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
