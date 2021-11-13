import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://damp-beach-22722.herokuapp.com/addproduct", {
      method: "POST",
      crossDomain: true,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
    alert("Product Added");
  };
  return (
    <div className="h-full my-12">
      <h1 className="text-center text-4xl font-semibold my-7">Add Product</h1>
      <div className="w-2/3 h-full  mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="flex flex-col justify-center">
            
              {" "}
              <label className="mb-1 font-semibold">Product Name :</label>
              <input
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800 mb-2"
                placeholder="Product Name"
                {...register("name")}
              />
              {/* include validation with required or other standard HTML validation rules */}
              <label className=" mb-1 mt-2 font-semibold">Price :</label>
              <input
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800 mb-2"
                placeholder="Price"
                type="number"
                {...register("price", { required: true })}
              />
              <label className=" mb-1 mt-2 font-semibold">Picture Url :</label>
              <input
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800 mb-2"
                placeholder="Picture url"
                {...register("picture", { required: true })}
              />
              <label className=" mb-1 mt-2 font-semibold">About Product :</label>
              <input
                className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800 mb-2"
                placeholder="About Product"
                {...register("about", { required: true })}
              />
            

            <label className=" mb-1 mt-2 font-semibold">Product Details :</label>
            <textarea
              className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800 mb-2"
              rows="4"
              cols="50"
              placeholder="Product details"
              {...register("details", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <button className="myButton w-full bg-blue-600 py-2 text-blue-50 mt-3 uppercase font-semibold " type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;





// https://i.ibb.co/Vm0Dd7p/watch-11.jpg
// 
// 
// https://i.ibb.co/4NV3y5D/watch-14.jpg
// 
// 
// 
// https://i.ibb.co/WPMfJPj/watch-1.png
// 
// 
// 
// 
// https://i.ibb.co/M19skfg/watch-4.jpg
// 
// https://i.ibb.co/2vbwftG/watch-6.jpg
// https://i.ibb.co/KxS0FQZ/watch-7.jpg
// https://i.ibb.co/FgtRCTV/watch-8.jpg
// https://i.ibb.co/R0HrfMt/watch-9.jpg
// https://i.ibb.co/Vm0Dd7p/watch-11.jpg