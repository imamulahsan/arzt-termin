import React from "react";
import { userMenu, adminMenu } from "./../data/navmenu";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import logoImage from "../images/arzt-termin-logo.svg";
import { message } from "antd";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  const handleProfile = () => {
    localStorage.clear();
    navigate("/profile");
  };

  const handleHome = () => {
    navigate("/");
  };

  // redering menu list
  const navMenu = user?.isAdmin ? adminMenu : userMenu;

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={handleHome}>
          <img src={logoImage} alt="" />
          <RouterLink to="/">Meine Arzt</RouterLink>
        </div>
        {navMenu.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <>
              <div className={`navlinks ${isActive && "active"}`}>
                {menu.name === "Services" ? (
                  <ScrollLink
                    to="services" // This should match the 'name' in Services.js
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as needed
                    duration={500}
                  >
                    {menu.name}
                  </ScrollLink>
                ) : (
                  <RouterLink to={menu.path}>{menu.name}</RouterLink>
                )}
              </div>
            </>
          );
        })}

        <div className={`navlinks `} onClick={handleProfile}>
          <RouterLink to="/profile">{user?.name}</RouterLink>
        </div>

        {user ? (
          // If user is logged in, show "Logout"
          <div className={`navlinks `} onClick={handleLogout}>
            <RouterLink to="/login">Logout</RouterLink>
          </div>
        ) : (
          // If user is not logged in, show "Login"
          <div className={`navlinks `}>
            <RouterLink to="/login">Login</RouterLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
