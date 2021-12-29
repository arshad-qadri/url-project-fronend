import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink, useHistory } from "react-router-dom";
import { cancel, create, update } from "../redux/actions";
import { ToastContainer, toast } from "react-toastify";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const find = useSelector((state) => state.data.find);
  const handleCreate = () => {
    dispatch(create(title.trim(), url.trim(), history));
    toast.success("Created Successfully");
  };

  useEffect(() => {
    if (find) {
      setTitle(find.title);
      setUrl(find.url);
    }
  }, [find]);
  const handleUpdate = () => {
    dispatch(update(params.id, title, url, history));
    toast.success("Updated Successfully");
  };
  const handleCancel = () => {
    setUrl("");
    setTitle("");
    dispatch(cancel());
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
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              className="border w-full h-16 pl-6 focus:border-blue-600 outline-0 rounded-lg"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className="flex w-full justify-end gap-x-3">
              <NavLink to="/">
                <button
                  onClick={handleCancel}
                  className="outline-0 bg-blue-200 text-white  py-2 px-5 rounded shadow  hover:shadow-xl transition-all"
                >
                  Cancel
                </button>
              </NavLink>
              <button
                onClick={find ? handleUpdate : handleCreate}
                className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow  hover:shadow-xl transition-all"
              >
                {find ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateProject;
