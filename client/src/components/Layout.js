import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
