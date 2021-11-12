import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";
import useAuth from "../../Hooks/useAuth";

const SingleProducts = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://damp-beach-22722.herokuapp.com/singleproducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
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
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="container mx-auto my-6 lg:my-12">
        <h1 className="text-center text-2xl">
          Single Products will be shown here :Id {id}
        </h1>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex">
            <img className="w-3/5" src={product?.picture} alt="" />
            <div className="ml-4">
              <h2>{product?.name}</h2>
              <h2>{product?.price}</h2>
              <h2>{product?.about}</h2>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-5/6">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className="text-gray-700 font-semibold ">Email :</label>
                {user.email && (
                  <input
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
                  defaultValue="test"
                  {...register("address", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <button
                  className="block bg-purple-500 text-purple-100 w-full py-2 text-center rounded-sm text-coolGray-50 bg-violet-600"
                  type="submit"
                >
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
