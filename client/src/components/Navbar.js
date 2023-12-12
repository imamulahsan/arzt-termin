import React from 'react'
import { userMenu } from "./../data/navmenu";
import { Link } from "react-router-dom";
import logoImage from '../images/arzt-logo.png';

const Navbar = () => {

  return (
    <>
    
    <nav className='navbar'>
    
    <div className='logo'>
    <h6>Meine Arzt</h6>
      <img src={logoImage} alt="" />
    </div>
      
      {userMenu.map((menu) => {
                return (
                  <>
                  

                    <div className='navlinks'>
                      
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
    </nav>
    </>
  )
}

export default Navbar