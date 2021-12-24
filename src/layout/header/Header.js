import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-600 text-center py-4 w-full ">
        <div className="container mx-auto flex justify-between items-center px-5 ">
          <h2 className="text-white text-2xl font-bold">URL Source</h2>
          <NavLink exact to="/create">
            <button className="bg-white px-5 py-1 rounded shadow hover:shadow-xl transition-all ">
              Create
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
