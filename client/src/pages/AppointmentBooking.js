import React from "react";
import { Form, Input, DatePicker, Select, Button, message } from "antd";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";

const { Option } = Select;

const AppointmentBookingForm = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user//appointmentbook",
        {
          ...values,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };

  return (
    <>
      <Navbar />
      <div className="team-header">
        <h2>Book an appointment</h2>
      </div>
      <div className="team-description">
        <p>We are very pleased to help you</p>
        <p>
          "Our strength is in our unity, and our passion is in our service."
        </p>
      </div>

      <div className="appointment-form">
        <Form
          name="appointmentBookingForm"
          onFinish={handleFinish}
          initialValues={{ status: "pending" }}
        >
          <Form.Item
            name="insuranceName"
            label="Insurance Name"
            rules={[
              { required: true, message: "Please enter insurance name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="insuranceNumber"
            label="Insurance Number"
            rules={[
              { required: true, message: "Please enter insurance number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: "Please enter first name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter last name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: "Please enter phone number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="time"
            label="Time"
            rules={[
              { required: true, message: "Please enter appointment time!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="status" label="Status">
            <Select>
              <Option value="pending">Pending</Option>
              <Option value="approved">Approved</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AppointmentBookingForm;
