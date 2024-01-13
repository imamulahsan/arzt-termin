import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import Navbar from "../components/Navbar";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server, display a message)
    console.log("Form submitted:", formData);
    // Add logic to send form data to your server or perform any other necessary actions
    // Show SweetAlert2 success message
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been sent.",
    });

    // Reset the form after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="team-header">
        <h2>Contact Us</h2>
      </div>
      <div className="team-description">
        <p>You can contact us 24x7 for any kind of Medical Need</p>
        <p>
          "Our strength is in our unity, and our passion is in our service."
        </p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
