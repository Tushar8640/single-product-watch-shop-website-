import React from "react";
import { useState } from "react/cjs/react.development";

const MakeAdmin = (e) => {
  const [adminEmail, setAdminEmail] = useState();
  const handleOnblur = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleOnsubmit = (e) => {

    const confirm = window.confirm("Make Admin ?")
    if(confirm){
        fetch("http://localhost:5000/users/admin",{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email:adminEmail})

        })
    }

    e.preventDefault();

    console.log({email:adminEmail});
  };
  return (
    <div className="w-10/12 mx-auto">
      <h1>Make Admin Page</h1>

      <div className="my-12">
        <form onSubmit={handleOnsubmit}>
          <input onBlur={handleOnblur} type="email" required />
          <button
            type="submit"
            className="bg-gray-600 px-3 py-1 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
