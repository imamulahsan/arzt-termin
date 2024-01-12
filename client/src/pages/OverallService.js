import React from "react";
import Navbar from "../components/Navbar";

const OverallService = () => {
  return (
    <>
      <Navbar />

      <div className="team-header">
        <h2>Our Services</h2>
      </div>
      <div className="team-description">
        <p>
          We provide consultations, examinations, prescriptions, vaccinations,
          and comprehensive healthcare services.
        </p>
        <p>
          "Our strength is in our unity, and our passion is in our service."
        </p>
      </div>
    </>
  );
};

export default OverallService;
