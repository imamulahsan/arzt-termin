import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import { useSelector } from "react-redux";
import Information from "./Information";
import Services from "./Services";

const Layout = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      {!user?.isAdmin && <Header />}
      <Information />
      <Services />
    </>
  );
};

export default Layout;
