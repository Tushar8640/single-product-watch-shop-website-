import React, { useEffect, useState } from "react";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
const [isChange,setIsChange] =useState(false)
const [productLoading, setProductLoading] = useState(true);

// get all products
  useEffect(() => {
    fetch("https://damp-beach-22722.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setProductLoading(false));
  }, [isChange]);
  console.log(products);
  
  // delete products 
  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete ?");
    if (confirm) {
      fetch(`https://damp-beach-22722.herokuapp.com/deleteproducts/${id}`, {
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
  if (productLoading) {
    return (
      <div className="flex justify-center">
      <div className="w-16 mt-12   h-16 border-blue-600 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
    </div>
    );
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-center md:text-4xl text-3xl font-semibold my-10">Manage Products</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {products.map((pd) => (
          <div style={{height:"450px"}} className="w-4/5  my-3 bg-white shadow-sm pb-3">
            <img className="md:w-3/4 w-7/12" src={pd.picture} alt="" />
            <div className="p-3">
              <h4 className="font-semibold text-blue-600 mt-2 text-lg md:text-xl">
                {pd.name}
              </h4>
              <h4 className="  mt-2 text-lg md:text-lg">{pd.about}</h4>
              <h4 className=" text-green-500 mt-2 text-lg md:text-lg"> Price : ${pd.price}</h4>

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
