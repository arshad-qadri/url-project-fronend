import React, { useEffect } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getUserAction } from "../redux/actions/get_user_action";

const Layout = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(getUserAction(history));
    }
  }, []);
  return (
    <div className="relative">
      <Header />
      <div {...props}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
