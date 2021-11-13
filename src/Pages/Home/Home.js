import React, { useEffect, useState } from "react";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [exploreLoading, setExploreLoading] = useState(true);

  useEffect(() => {
    fetch("https://damp-beach-22722.herokuapp.com/homeproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setExploreLoading(false));
  }, []);
  console.log(products);

  return (
    <>
      <Navigation />
      <Banner></Banner>
      <Features></Features>
      <div className="container bg-gray-100 py-12 mx-auto">
        <h2 className="text-center text-blue-500 font-bold text-4xl my-12">
          See product that you need
        </h2>
        {exploreLoading ? (
          <div className="flex justify-center">
            <div className="w-16 mt-12   h-16 border-blue-600 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
          </div>
        ) : (
          <ProductsCard products={products}></ProductsCard>
        )}
      </div>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </>
  );
};

export default Home;
