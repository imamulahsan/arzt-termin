import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  message,
  TimePicker,
} from "antd";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";

const { Option } = Select;

const insuranceCompanies = [
  "Allianz",
  "AOK",
  "TK (Techniker Krankenkasse)",
  "Barmer",
  "DKV",
  "Other",
];

const AppointmentBookingForm = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
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

  // function to handle availability check
  const handleAvailabilityCheck = () => {
    // Implement your availability check logic here
    // You may want to send a request to the server to check if the selected time is available
    // If available, you can show a success message; otherwise, show an error message.
    message.success("Time is available!");
  };

  // function to disable past days
  const disabledDate = (current) => {
    return current && current < moment().startOf("day");
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
        <h2>Insurance Information</h2>
        <Form
          name="appointmentBookingForm"
          onFinish={handleFinish}
          initialValues={{ status: "pending" }}
        >
          <Form.Item
            name="insuranceName"
            label="Insurance Name"
            rules={[
              { required: true, message: "Please select insurance name!" },
            ]}
          >
            <Select
              aria-required="true"
              placeholder="Select an insurance company"
            >
              {insuranceCompanies.map((company) => (
                <Option key={company} value={company}>
                  {company}
                </Option>
              ))}
            </Select>
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

          <h2>Personal Information</h2>

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

          <h2>Appointment Information</h2>

          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker
              aria-required={"true"}
              format="DD-MM-YYYY"
              onChange={(value) => {
                setDate(moment(value).format("DD-MM-YYYY"));
              }}
              disabledDate={disabledDate} // set the disabledDate function
            />
          </Form.Item>

          <Form.Item
            name="time"
            label="Time"
            rules={[
              { required: true, message: "Please enter appointment time!" },
            ]}
          >
            <TimePicker
              aria-required="true"
              format="HH:mm"
              minuteStep={30}
              suffixIcon=""
              onChange={(value) => {
                setTime(moment(value).format("HH:mm"));
              }}
              disabledHours={() => {
                const disabledHours = [];
                for (let i = 0; i < 9; i++) {
                  // Disable hours before 9:00
                  disabledHours.push(i);
                }
                for (let i = 19; i < 24; i++) {
                  // Disable hours after 18:00
                  disabledHours.push(i);
                }
                return disabledHours;
              }}
              disabledMinutes={(selectedHour) => {
                if (selectedHour < 9 || selectedHour >= 18) {
                  // Disable all minutes if the hour is outside 9:00-18:00
                  return [];
                }
                // Disable minutes for the first half-hour of each hour
                return selectedHour % 2 === 1 ? [0] : [];
              }}
            />
          </Form.Item>

          {/* Check Availability Button */}
          <Form.Item>
            <Button type="primary" onClick={handleAvailabilityCheck}>
              Check Availability
            </Button>
          </Form.Item>

          {/* Confirm Booking Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Confirm Booking
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AppointmentBookingForm;
