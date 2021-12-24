import React from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/actions";

const CreateProject = () => {
  const dispatch = useDispatch();
  const handleCreate = () => {
    console.log("click");
    dispatch(create());
  }
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
              placeholder="Enter Title"
            />

            <input
              type="text"
              className="border w-full h-16 pl-6 focus:border-blue-600 outline-0 rounded-lg"
              placeholder="Enter URL"
            />
            <button
              onClick={handleCreate}
              className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
