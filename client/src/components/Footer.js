import React from "react";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      Doctor Appointment System ©{new Date().getFullYear()} All Rights Reserved
    </AntFooter>
  );
};

export default Footer;
