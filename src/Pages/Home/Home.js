import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";

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
      <div className="container mx-auto">
        <h2 className="text-center">This is Home</h2>
        <ProductsCard products={products}></ProductsCard>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
