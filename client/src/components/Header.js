import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../images/header-image.jpeg";

const Header = () => {
  return (
    <>
      <header className="header">
        <section>
          <div className="banner">
            <h2>Dr. medic Adrian Angelescu</h2>
            <h3>Specialist in General Medicine</h3>
            <p>Welcome to the family doctor's office</p>
            <Link to="/appointment">
              <button className="appointment-button" aria-label="On Click">
                Book an Appointment
              </button>
            </Link>
          </div>
          <div className="banner-img">
            <img src={headerImage} alt="" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
