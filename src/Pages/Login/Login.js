import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { loginWithGoogle, emailPassLogin } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData.email, loginData.password);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(location, history);
  };
  const handleEmialPassLogin = (e) => {
    emailPassLogin(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="container mx-auto ">
        <div className="flex justify-items-center">
          <div className="  w-5/6  md:w-7/12 mx-auto p-8 space-y-3 rounded-xl bg-coolGray-50 text-coolGray-800">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handleEmialPassLogin}
              novalidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label for="username" className="block text-coolGray-600">
                  Email
                </label>
                <input
                  autocomplete="off"
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
                  autocomplete="off"
                  required
                  onBlur={handleOnblur}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-4 py-5 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
                />
              </div>
              <button type="submit" className="btn-regular w-full">
                Sign in
              </button>
            </form>
            <div className="flex items-center py-2 ">
              <div className=" bg-coolGray-300"></div>
              <p className="text-sm">OR..Login with social accounts</p>
            </div>
            <div className="flex justify-center ">
              <button
                onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="w-full
                items-center
                block
                lg:px-10
                py-3.5
                text-base
                font-medium
                text-center text-blue-400
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                mb-2
                focus:ring-gray-500"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-4 h-4  fillCurrent"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <span className="ml-1">Login With google</span>
                </div>
              </button>
            </div>
            <Link
              to="registration"
              className=" text-center sm:px-3 "
            >
              Don't have an account?
              <button className="underline p-1 text-coolGray-800">
                Registration
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
