import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const SingleProducts = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://damp-beach-22722.herokuapp.com/singleproducts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  //   console.log(product);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.productName = product.name;
    data.productImage = product.picture;
    data.userName = user?.displayName;
    data.status = "pending";

    fetch("https://damp-beach-22722.herokuapp.com/placeorder", {
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
        
      });
    console.log(data);
    alert("Ordered Placed")
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="container mx-auto my-6 lg:my-12">
        <div className=" ">
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="w-4/5 md:w-1/3">
              <h2 className="text-4xl md:text-6xl mb-5 font-semibold text-blue-600">
                {product?.name}
              </h2>
              <h2 className="text-3xl mb-2 font-medium">{product?.about}</h2>
              <h2 className="text-2xl font-medium mb-3">
                Price : ${product?.price}
              </h2>
              <p>{product?.details}</p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <Link
                  to="/"
                  className="text-blue-500 mt-5 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </Link>
                <Link
                  to="/"
                  className="text-blue-500 mt-5 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </Link>
                <Link
                  to="/"
                  className="text-blue-500 mt-5 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </Link>
              </div>
              <hr className="mt-6 border border-gray-300" />
            </div>
            <div className="shadow-xl">
              <img className="w-5/6" src={product?.picture} alt="" />
            </div>
          </div>
          <div className="flex justify-center my-10 bg-gray-100 py-5">
            <div className="w-4/6 lg:w-3/6">
              <h1 className="text-center text-5xl my-8">Place Your Order</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className="text-gray-700 font-semibold ">Email :</label>
                {user.email && (
                  <input
                    placeholder="Your Email"
                    className="w-full mt-1 px-4 py-3 rounded-md border-coolGray-300 bg-gray-200 text-coolGray-800 mb-2"
                    defaultValue={user.email}
                    {...register("userEmail")}
                  />
                )}

                {/* include validation with required or other standard HTML validation rules */}
                <label className="text-gray-700 font-semibold ">
                  Address :
                </label>
                <input
                  placeholder="Your Address"
                  className="w-full mt-1 px-4 py-3 rounded-md border-coolGray-300 bg-gray-200 text-coolGray-800 mb-2"
                  defaultValue="address"
                  {...register("address", { required: true })}
                />
                <label className="text-gray-700 font-semibold ">
                  Phone Number :
                </label>
                <input
                  placeholder="Your Phone Number"
                  className="w-full mt-1 px-4 py-3 rounded-md border-coolGray-300 bg-gray-200 text-coolGray-800 mb-2"
                  defaultValue="phone"
                  {...register("phone", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <button className="btn-regular w-full" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SingleProducts;
