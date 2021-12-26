import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const auth = localStorage.getItem("auth");
  const history = useHistory();
  const location = useLocation();
  const handleCreate = () => {
    if (auth === "true") {
      if (location.pathname === "/") {
        history.push("/create");
      } else {
        history.push("/");
      }
    } else {
      toast.error("You can't access");
    }
  };
  return (
    <>
      <div className="bg-blue-600 text-center py-4 w-full ">
        <div className="container mx-auto flex justify-between items-center px-5 ">
          <h2 className="text-white text-2xl font-bold">URL Source</h2>
          {location.pathname !== "/auth" && (
            <button
              onClick={handleCreate}
              className="bg-white px-5 py-1 rounded shadow hover:shadow-xl transition-all "
            >
              {location.pathname === "/create" ? "Back" : "Create"}
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Header;
