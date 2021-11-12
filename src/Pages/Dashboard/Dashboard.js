import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink,
  useHistory,
} from "react-router-dom";
import AdminRoute from "../../AdminRoute/AdminRoute";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import ExploreMore from "../ExploreMore/ExploreMore";
import AddProducts from "./AddProducts/AddProducts";
import AllOrder from "./AllOrder/AllOrder";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllOrder from "./ManageAllOrder/ManageAllOrder";
import ManageAllProducts from "./ManageAllProducts/ManageAllProducts";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";

const Dashboard = () => {
  const [isToggle, setIsToggle] = useState(false);
  const history = useHistory();

  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  const handleLogOut = () => {
    logOut();
    // history.push("/")
  };

  console.log(admin);
  // sidebar toggle

  const handleTOggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className=" mx-auto bg-gray-100">
      <div className="flex relative">
        {/* dashboard navbar  */}
        <div
          className={`${
            isToggle ? "absolute top-0 left-0 z-20  h-screen " : "hidden"
          } `}
        >
          <div className="flex flex-col  p-3 w-60  text-blue-50 shadow-lg bg-blue-300 h-100">
            <div className=" w-10/12 my-8">
              <div className="flex items-center justify-between">
                <h2 className="text-gray-700 text-xl font-bold">Dashboard</h2>

                <button
                  onClick={handleTOggle}
                  className="p-2 bg-blue-400 rounded-full shadow"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <ul
                  onClick={handleTOggle}
                  className="pt-2 pb-4  space-y-1 text-sm"
                >
                  <li className="">
                    <NavLink
                      to={`${url}`}
                      className="flex items-center p-2 space-x-3 "
                    >
                      Your Order
                    </NavLink>
                  </li>

                  <li className=" bg-coolGray-100 text-coolGray-900">
                    <NavLink
                      activeStyle={{
                        boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                        borderRadius: "5px",
                      }}
                      to={`${url}/review`}
                      className="flex  items-center p-2 "
                    >
                      <span>Review</span>
                    </NavLink>
                  </li>
                  <li className="rounded-sm">
                    <NavLink
                      activeStyle={{
                        boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                        borderRadius: "5px",
                      }}
                      to={`${url}/payment`}
                      className="flex  items-center p-2 "
                    >
                      <span>Payment</span>
                    </NavLink>
                  </li>
                  {admin && (
                    <>
                      <li className="rounded-sm">
                        <NavLink
                          activeStyle={{
                            boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                            borderRadius: "5px",
                          }}
                          to={`${url}/manageorder`}
                          className="flex  items-center p-2 "
                        >
                          <span>Manage Orders</span>
                        </NavLink>
                      </li>
                      <li className="rounded-sm">
                        <NavLink
                          activeStyle={{
                            boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                            borderRadius: "5px",
                          }}
                          to={`${url}/makeadmin`}
                          className="flex  items-center p-2 "
                        >
                          <span>Make Admin</span>
                        </NavLink>
                      </li>
                      <li className="rounded-sm">
                        <NavLink
                          activeStyle={{
                            boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                            borderRadius: "5px",
                          }}
                          to={`${url}/addproducts`}
                          className="flex  items-center p-2 "
                        >
                          <span>Add Products</span>
                        </NavLink>
                      </li>
                      <li className="rounded-sm">
                        <NavLink
                          activeStyle={{
                            boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                            borderRadius: "5px",
                          }}
                          to={`${url}/manageproduct`}
                          className="flex  items-center p-2 "
                        >
                          <span>Manage Products</span>
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li className="rounded-sm">
                    <NavLink
                      activeStyle={{
                        boxShadow: "1px 5px 10px rgba(20,10,10,0.1)",
                        borderRadius: "5px",
                      }}
                      to="/home"
                      className="flex  items-center p-2 "
                    >
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li className="rounded-sm ">
                    <button
                      onClick={handleLogOut}
                      className="bg-blue-700 font-semibold px-3 py-1 rounded text-purple-50 mt-2"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  relative">
          {isToggle == false && (
            <button
              onClick={handleTOggle}
              className="p-2  bg-blue-200  absolute top-0 left-0 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
          <Switch>
            <Route exact path={path}>
              <AllOrder></AllOrder>
            </Route>
            <Route exact path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route exact path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <AdminRoute exact path={`${path}/manageorder`}>
              <ManageAllOrder></ManageAllOrder>
            </AdminRoute>
            <AdminRoute exact path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path={`${path}/addproducts`}>
              <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute exact path={`${path}/manageproduct`}>
              <ManageAllProducts></ManageAllProducts>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
