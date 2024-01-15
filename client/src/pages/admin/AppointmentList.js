import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Table } from "antd";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  //getUsers
  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllAppointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  // antD table col
  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
    },
    {
      title: "Insurance Name",
      dataIndex: "insuranceName",
    },
    {
      title: "Insurance No",
      dataIndex: "insuranceNumber",
    },
    {
      title: "Name",
      dataIndex: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block</button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <div className="team-header">
        <h2>Appointment List</h2>
      </div>
      <div className="user-description">
        <Table
          columns={columns}
          dataSource={appointments}
          style={{ backgroundColor: "#e6f7ff" }}
        />
      </div>
    </>
  );
};

export default AppointmentList;
