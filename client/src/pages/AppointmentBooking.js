import React, { useState } from "react";
import { useParams } from "react-router-dom";
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

const doctorlist = [
  "Dr. medic Moon Chae-Won",
  "Dr. Selena Gomez",
  "Physiotherapist. Emily Rose",
];

const AppointmentBookingForm = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const params = useParams();

  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

      // Perform availability check
      const availabilityCheckRes = await axios.post(
        "/api/v1/user/appointment-availability",
        { userId: params.userId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (availabilityCheckRes.data.success) {
        // If the appointment is available, proceed with the booking
        const bookingRes = await axios.post(
          "/api/v1/user/appointmentbook",
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

        if (bookingRes.data.success) {
          message.success(bookingRes.data.message);
          navigate("/");
        } else {
          message.error(bookingRes.data.message);
        }
      } else {
        // If the appointment is not available, show a message or take appropriate action
        message.error(availabilityCheckRes.data.message);

        // You can also reset the form or take other actions here if needed
        // Resetting the date and time to empty values
        setDate("");
        setTime("");
      }

      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      message.error("Something went wrong.");
    }
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
        <Form name="appointmentBookingForm" onFinish={handleFinish}>
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
            name="doctorName"
            label="Doctor"
            rules={[{ required: true, message: "Please select doctor name!" }]}
          >
            <Select aria-required="true" placeholder="Select an doctor">
              {doctorlist.map((doctor) => (
                <Option key={doctor} value={doctor}>
                  {doctor}
                </Option>
              ))}
            </Select>
          </Form.Item>

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
              minuteStep={15}
              suffixIcon=""
              onChange={(value) => {
                setTime(moment(value).format("HH:mm"));
              }}
              disabledTime={(current) => {
                const disabledHours = [];
                const disabledMinutes = [];

                // Disable all hours before 09:00 and after 18:00
                for (let i = 0; i < 9; i++) {
                  disabledHours.push(i);
                }
                for (let i = 19; i < 24; i++) {
                  disabledHours.push(i);
                }

                // Disable minutes for the first half-hour of each hour
                if (current && (current.hour() < 9 || current.hour() >= 18)) {
                  disabledMinutes.push(0, 30);
                }

                return {
                  disabledHours: () => disabledHours,
                  disabledMinutes: () => disabledMinutes,
                };
              }}
            />
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
