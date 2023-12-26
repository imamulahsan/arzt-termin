import React from "react";
import { userMenu, adminMenu } from "./../data/navmenu";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import logoImage from "../images/arzt-termin-logo.svg";
import { message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import { setUser } from "../redux/features/userSlice"; // Import the setUser action

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // This effect will run whenever the user state changes
  }, [user]);

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    dispatch(setUser(null)); // Clear the user state
    navigate("/login");
  };

  const handleProfile = () => {
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

        <div className="navlinks">
          {user && (
            <>
              {/* Profile link */}
              <RouterLink onClick={handleProfile} to="/profile">
                {user.name}
              </RouterLink>

              {/* Logout button */}
            </>
          )}
        </div>
        <div className={`navlinks `} onClick={handleLogout}>
          <RouterLink to="/login">Logout</RouterLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
