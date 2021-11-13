import React, { useEffect, useState } from "react";

import useAuth from "../../../Hooks/useAuth";

const AllOrder = () => {
  const { user } = useAuth();
  const [products, setPruducts] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fetch(`https://damp-beach-22722.herokuapp.com/userorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPruducts(data))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoader(false));
  }, [user?.email, isChange]);

  console.log(user.email);
  console.log(products);

  // cancle ordered product

  const handleCancle = (id) => {
    const isConfirm = window.confirm("Are You Confirm to Cancle?");
    console.log(id, isConfirm);
    if (isConfirm) {
      fetch(`https://damp-beach-22722.herokuapp.com/cancleorder/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount > 0) {
            setIsChange(!isChange);
          }
        });
    }
  };
  if (isLoader) {
    return (
      <div className="flex justify-center">
        <div className="w-16 mt-12   h-16 border-blue-600 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl md:text-4xl font-semibold my-8">
        Your Orders
      </h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((pd) => (
          <div className="w-4/5 my-3 bg-white shadow-sm pb-3">
            <img className="w-full" src={pd.productImage} alt="" />
            <div className="p-3">
              <h4 className="font-semibold text-yellow-700 mt-2 text-lg md:text-xl">
                {pd.productName}
              </h4>
              <h4>{pd.status}</h4>
              <button
                onClick={() => handleCancle(pd._id)}
                className="bg-blue-900 text-blue-50 px-4 py-1 rounded mt-2"
              >
                Cancle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrder;
