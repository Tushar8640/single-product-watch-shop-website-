import React, { useEffect, useState } from "react";
import CustomerReview from "../../Components/CustomerReview/CustomerReview";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://damp-beach-22722.herokuapp.com/homeproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <>
      <Navigation />
      <Banner></Banner>
      <Features></Features>
      <div className="container bg-gray-100 py-12 mx-auto">
        <h2 className="text-center font-bold text-4xl my-12">
          See your product that you need
        </h2>
        <ProductsCard products={products}></ProductsCard>
      </div>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </>
  );
};

export default Home;
