import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";

const ExploreMore = () => {
  const [products, setProducts] = useState([]);
  const [isproductLoading, setIsProductLoading] = useState(true);

  useEffect(() => {
    setIsProductLoading(true)
    fetch("https://damp-beach-22722.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsProductLoading(false));
  }, []);
  console.log(products);

  return (
    <>
      <Navigation />
      {isproductLoading ? (
        <div className="flex justify-center">
        <div className="w-16 mt-12   h-16 border-blue-600 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
      ) : (
        <ProductsCard products={products}></ProductsCard>
      )}
      <Footer></Footer>
    </>
  );
};

export default ExploreMore;
