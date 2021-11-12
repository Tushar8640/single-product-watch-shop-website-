import React, { useState } from "react";

const MakeAdmin = (e) => {
  const [adminEmail, setAdminEmail] = useState();
  const handleOnblur = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleOnsubmit = (e) => {
    const confirm = window.confirm("Make Admin ?");
    if (confirm) {
      fetch("https://damp-beach-22722.herokuapp.com/users/admin", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: adminEmail }),
      });
    }

    e.preventDefault();

    console.log({ email: adminEmail });
  };
  return (
    <div className=" mx-auto w-full ">
      <h1 className="text-center text-4xl font-semibold">Make Admin</h1>

      <div className="my-12 flex justify-center  ">
        <div className="md:w-2/5 w-3/5">
          <form className="" onSubmit={handleOnsubmit}>
            <input
              className="py-4 px-4 w-full border rounded mb-4 border-gray-700"
              onBlur={handleOnblur}
              placeholder="Email"
              type="email"
              required
            />
            <button type="submit" className=" px-8 rounded hover:bg-blue-400 focus:bg-blue-500 py-2 bg-blue-500 text-white font-semibold ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
