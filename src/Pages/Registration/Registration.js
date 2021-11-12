import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Registration = () => {
  const { user, registerUser } = useFirebase();
  const [registrationData, setRegistrationData] = useState({});
  const history = useHistory();
  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...registrationData };
    newData[field] = value;
    setRegistrationData(newData);
    console.log(
      registrationData.email,
      registrationData.password,
      registrationData.name
    );
  };

  const handleRegistraion = (e) => {
    registerUser(
      registrationData.email,
      registrationData.password,
      registrationData.name,
      history
    );
    alert("registration successfull");
    e.preventDefault();
  };
  return (
    <div className="container mx-auto ">
      
      <div className="flex justify-items-center">
        <div className="  w-5/6 md:w-7/12 mx-auto p-8 space-y-3 rounded-xl bg-coolGray-50 text-coolGray-800">
          <h1 className="text-2xl font-bold text-center">Rregistration</h1>
          <form
            onSubmit={handleRegistraion}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label for="username" className="block text-coolGray-600">
                Name
              </label>
              <input
                required
                onBlur={handleOnblur}
                type="text"
                name="name"
                id="username"
                placeholder="Your Name"
                className="w-full px-4 py-5 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="email" className="block text-coolGray-600">
                Email
              </label>
              <input
                required
                onBlur={handleOnblur}
                type="email"
                name="email"
                id="username"
                placeholder="Your Email"
                className="w-full px-4 py-5 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block text-coolGray-600">
                Password
              </label>
              <input
                required
                onBlur={handleOnblur}
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
              />
            </div>
            <button
              type="submit"
              className="btn-regular w-full"
            >
              Sign Up
            </button>
          </form>

          <Link to="login" className=" text-center sm:px-6 text-coolGray-600">
            Already have an account?
            <button className="underline p-1 text-coolGray-800">
              Please Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
