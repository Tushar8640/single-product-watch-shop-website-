import React, { useState,useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";


const ExploreMore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://damp-beach-22722.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products)
  return (
    <>
    <Navigation/>
    <ProductsCard products={products}></ProductsCard>
    {/* <div className="container mx-auto">
      <h1 classname="text-center text-2xl">All products will shown here</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {products?.map((pd) => (
          <div className="max-w-xs rounded-md shadow-md bg-coolGray-50 text-coolGray-800 my-3">
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
                <p className="text-coolGray-800">
                  {pd.about}
                </p>
                <p className="text-coolGray-800">
                  {pd.price}
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-purple-50"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> */}
    <Footer></Footer>
    </>
  );
};

export default ExploreMore;
