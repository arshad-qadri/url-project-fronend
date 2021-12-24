
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children, ...props }) => {
  return (
    <>
      
          <Header />
          <div {...props}>{children}</div>
          <Footer />
       
    </>
  );
};

export default Layout;
