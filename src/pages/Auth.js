import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from "react-toastify";

const Auth = () => {
  const [inpEmail, setInpEmail] = useState("");
  const [inpPass, setInpPass] = useState("");
  const email = "arshad@gmail.com";
  const password = "arshad321";
  const history = useHistory();

  const handleAccess = () => {
    if (!inpEmail || !inpPass) {
      toast.error(" Enter Email And Password");
    } else {
      if (email === inpEmail && password === inpPass) {
        localStorage.setItem("auth", true);
        toast.success("You Get Access");
        history.push("/");
      } else {
        toast.error("Email or Passowrd Wrong");
      }
    }
  };

  return (
    <>
      <div
        className="bg-blue-100 lg:p-6"
        style={{ height: "calc(100vh - 104px)" }}
      >
        <div className="container mx-auto bg-white h-full shadow-lg rounded py-8">
          <div className=" w-3/4 mx-auto h-full flex flex-col items-center justify-center gap-y-6">
            <input
              type="text"
              className="border w-full h-16 pl-6 focus:border-blue-600 outline-0 rounded-lg"
              placeholder="Enter Email"
              value={inpEmail}
              onChange={(e) => setInpEmail(e.target.value)}
            />

            <input
              type="text"
              className="border w-full h-16 pl-6 focus:border-blue-600 outline-0 rounded-lg"
              placeholder="Enter Password"
              value={inpPass}
              onChange={(e) => setInpPass(e.target.value)}
            />
            <div className="flex w-full justify-end gap-x-3">
              <NavLink to="/">
                <button
                  //   onClick={handleCancel}
                  className="outline-0 bg-blue-200 text-white  py-2 px-5 rounded shadow  hover:shadow-xl transition-all"
                >
                  Cancel
                </button>
              </NavLink>
              <button
                onClick={handleAccess}
                className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow  hover:shadow-xl transition-all"
              >
                Access
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Auth;
