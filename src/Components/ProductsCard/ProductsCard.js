import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({products}) => {

  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {products?.map((pd) => (
          <div key={pd._id} className="max-w-xs rounded-md shadow-md bg-coolGray-50 text-coolGray-800 my-3">
            <img
              src={pd.picture}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-coolGray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {pd.name}
                </h2>
                <p className="text-coolGray-800">{pd.about}</p>
                <p className="text-coolGray-800">{pd.price}</p>
              </div>
              <Link to={`singleproducts/${pd._id}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-purple-50"
              >
                Buy Item
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
