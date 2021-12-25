import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUrl, findOne, getData } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const Home = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getData());
    console.log("data", data);
  }, []);
  const handleEdit = (id) => {
    dispatch(findOne(id, history));
  };
  const handleDelete = (id) => {
    dispatch(getData());
    dispatch(deleteUrl(id));
  };
  return (
    <>
      <div
        className="bg-blue-100 w-full"
        style={{ minHeight: "calc(100vh - 104px)" }}
      >
        <div className="container mx-auto py-3 px-2 flex flex-col gap-y-4">
          {data &&
            data?.data?.map((item) => (
              <div className="bg-white p-3 shadow rounded-lg" key={item._id}>
                <div className="res-flex-col flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg">{item.title}</p>
                    <div className=" w-full border rounded py-2 px-5 bg-blue-100 text-gray-400">
                      {item.url}
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-x-2">
                    <NavLink to={item.url} target="_blank">
                      <button className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                        Open
                      </button>
                    </NavLink>
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
            ))}

          {/* <div className="bg-white p-3 shadow rounded-lg ">
            <div className="res-flex-col flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">Title here</p>
                <div className=" w-full border rounded py-2 px-5 bg-blue-100 text-gray-400">
                  https://pink-grasshopper-c7ecs1q8.ws-us25.gitpod.io/
                </div>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <NavLink to="/" target="_blank">
                  <button className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                    Open
                  </button>
                </NavLink>
                <button className="outline-0 text-2xl bg-green-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                  <FaEdit />
                </button>
                <button className="outline-0 text-2xl bg-red-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 shadow rounded-lg ">
            <div className="res-flex-col flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">Title here</p>
                <div className=" w-full border rounded py-2 px-5 bg-blue-100 text-gray-400">
                  https://pink-grasshopper-c7ecs1q8.ws-us25.gitpod.io/
                </div>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <NavLink to="/" target="_blank">
                  <button className="outline-0 bg-blue-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                    Open
                  </button>
                </NavLink>
                <button className="outline-0 text-2xl bg-green-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                  <FaEdit />
                </button>
                <button className="outline-0 text-2xl bg-red-600 text-white  py-2 px-5 rounded shadow ml-auto hover:shadow-xl transition-all">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
