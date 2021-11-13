import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const ManageAllOrder = () => {
  const { user } = useAuth();
  const [products, setPruducts] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [approveValue, setApproveValue] = useState(null);

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
    const isConfirm = window.confirm("Are You Confirm to Delete?");

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

  const handleOnblur = (e) => {
    const status = e.target.value;
    setApproveValue({ status });
  };
  const handleApprove = (id) => {
    if (approveValue !== null) {
      fetch(`https://damp-beach-22722.herokuapp.com/approveorder/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(approveValue),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount) {
            setIsChange(!isChange);
          }
        });
    } else {
      alert("Please Select An Order Status");
    }

    console.log(id, approveValue);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center md:text-4xl text-3xl font-semibold">Manage All order</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((pd) => (
          <div className="w-5/6 my-3 bg-white shadow-sm pb-3">
            <img className="w-full" src={pd.productImage} alt="" />
            <div className="p-3">
              <h4 className="font-semibold text-blue-700 mt-2 text-lg md:text-xl">
                {pd.productName}
              </h4>
              <div>
                  <h4 className="text-green-600 mt-1 py-1 rounded  ">
                   Order {pd.status}
                  </h4>
                </div>
              <div className="flex align-middle my-1 justify-between">
               
                <div className="flex flex-col md:flex-row">
                  <button
                    onClick={() => handleApprove(pd._id)}
                    className="btn-small mt-2"
                  >
                    Submit
                  </button>
                  <label className="block text-left">
                    <select
                      onBlur={handleOnblur}
                      className="form-select focus:border-blue-500 border-2 py-1 ml-2 px-5 block  mt-1"
                    >
                      <option>approve</option>
                      <option>shipped</option>
                    </select>
                  </label>
                </div>
              </div>
              <button
                onClick={() => handleCancle(pd._id)}
                className="bg-red-500 text-blue-50 px-4 py-1 rounded mt-2"
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
