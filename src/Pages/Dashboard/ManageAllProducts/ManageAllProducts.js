import React, { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
const [isChange,setIsChange] =useState(false)
  useEffect(() => {
    fetch("https://damp-beach-22722.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isChange]);
  console.log(products);
  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete ?");
    if (confirm) {
      fetch(`http://localhost:5000/deleteproducts/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) =>{ console.log(result)
            setIsChange(!isChange)});
    }
    console.log(id);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center">All order page</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((pd) => (
          <div className="w-4/5 my-3 bg-white shadow-sm pb-3">
            <img className="w-full" src={pd.picture} alt="" />
            <div className="p-3">
              <h4 className="font-semibold text-yellow-700 mt-2 text-lg md:text-xl">
                {pd.name}
              </h4>
              <h4 className="  mt-2 text-lg md:text-lg">{pd.about}</h4>

              <button
                onClick={() => handleDelete(pd._id)}
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

export default ManageAllProducts;