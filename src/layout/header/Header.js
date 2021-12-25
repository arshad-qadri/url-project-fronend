import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="bg-blue-600 text-center py-4 w-full ">
        <div className="container mx-auto flex justify-between items-center px-5 ">
          <h2 className="text-white text-2xl font-bold">URL Source</h2>
          <NavLink exact to={location.pathname === "/create" ? "/" : "/create"}>
            <button className="bg-white px-5 py-1 rounded shadow hover:shadow-xl transition-all ">
              {location.pathname === "/create" ? "Back" : "Create"}
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
