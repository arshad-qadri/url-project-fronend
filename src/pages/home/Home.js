import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUrl, findOne, getData } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const data = useSelector((state) => state?.data);
  const auth = localStorage.getItem("auth");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getData());
    console.log("data", data);
  }, []);
  const handleEdit = (id) => {
    if (auth === "true") {
      dispatch(findOne(id, history));
    } else {
      toast.error("You can't access");
    }
  };
  const handleDelete = (id) => {
    if (auth === "true") {
      dispatch(deleteUrl(id));
      dispatch(getData());
      toast.success("Deleted Successfully");
    } else {
      toast.error("You can't access");
    }
  };
  return (
    <>
      <div
        className="bg-blue-100 w-full"
        style={{ minHeight: "calc(100vh - 104px)" }}
      >
        <div className="container mx-auto py-3 px-2 flex flex-col gap-y-4">
          {data?.data?.length > 0 ? (
            data?.data.map((item) => (
              <div className="bg-white p-3 shadow rounded-lg" key={item._id}>
                <div className="res-flex-col flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg">{item.title}</p>
                    <div className=" w-full border rounded py-2 px-5 bg-blue-100 text-gray-400">
                      {item.url}
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-x-2">
                    <a href={item.url} target="_blank">
                      <button className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                        Open
                      </button>
                    </a>
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="outline-0 text-2xl bg-green-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="outline-0 text-2xl bg-red-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center font-bold">Not any project</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
