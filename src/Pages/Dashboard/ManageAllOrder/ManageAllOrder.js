import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const ManageAllOrder = () => {
  const { user } = useAuth();
  const [products, setPruducts] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fetch("https://damp-beach-22722.herokuapp.com/allorder")
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
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center">All order page</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((pd) => (
          <div className="w-4/5 my-3 bg-white shadow-sm pb-3">
            <img className="w-full" src={pd.productImage} alt="" />
            <div className="p-3">
              <h4 className="font-semibold text-yellow-700 mt-2 text-lg md:text-xl">
                {pd.productName}
              </h4>
              <div  className="flex align-middle my-1">
                <h4 className="bg-yellow-600 mt-1 py-1 rounded text-white px-2">{pd.status}</h4>
                <div>
                  <label className="block text-left">
                    <select className="form-select block  mt-1">
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </label>
                </div>
              </div>
              <button
                onClick={() => handleCancle(pd._id)}
                className="bg-blue-900 text-blue-50 px-4 py-1 rounded mt-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrder;
