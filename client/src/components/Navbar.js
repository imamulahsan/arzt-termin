import React from "react";
import { userMenu, adminMenu } from "./../data/navmenu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImage from "../images/arzt-termin-logo.svg";
import { message } from "antd";
import { useSelector } from "react-redux";

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
          <Link to="/">Meine Arzt</Link>
        </div>
        {navMenu.map((menu) => {
          const isActive = location.pathname === menu.path;
          return (
            <>
              <div className={`navlinks ${isActive && "active"}`}>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            </>
          );
        })}

        <div className={`navlinks `} onClick={handleProfile}>
          <Link to="/profile">{user?.name}</Link>
        </div>

        <div className={`navlinks `} onClick={handleLogout}>
          <Link to="/login">Logout</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
