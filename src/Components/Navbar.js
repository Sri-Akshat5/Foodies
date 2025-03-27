import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg"

import LocalMallIcon from '@mui/icons-material/LocalMall';
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css"




function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <nav className='Nav'>
            <div className='nav-logo-containor'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='nav-link-containor'>
                <a href='#Home' className='link-component'>Home</a>
                <a href='#About' className='link-component'>About</a>
                <a href='#Work' className='link-component'>work</a>
                <a href='#Testimonial' className='link-component'>Testimonials</a>
                <a href='#Contact' className='link-component'>Contacts</a>
                <a href='' className='link-component'>
                    <LocalMallIcon className='nav-cart-icon' />
                </a>
                <button className='primary-booknow'>
                    Book Now
                </button>
            </div>
            

            <div className='navbar-mobile-menu'>
              {
                openMenu ? (
                    <GiHamburgerMenu onClick={()=> setOpenMenu(false)}/> ):(   <GiHamburgerMenu onClick={() => setOpenMenu(true)} />
                )
              }
            </div>

          {
            openMenu && 
           ( <div className='mobile-menu-drawer'>
              <GiHamburgerMenu onClick={() => setOpenMenu(false)}/>
              <a href='#Home' className='link-component' onClick={()=> setOpenMenu(false)}>Home</a>
              <a href='#About' className='link-component' onClick={()=> setOpenMenu(false)}>About</a>
              <a href='#Work' className='link-component' onClick={()=> setOpenMenu(false)}>Work</a>
              <a href='#Testimonial' className='link-component' onClick={()=> setOpenMenu(false)}>Testimonials</a>
              <a href='#Contact' className='link-component' onClick={()=> setOpenMenu(false)}>Contacts</a>
              <a href='' className='link-component' onClick={()=> setOpenMenu(false)}><LocalMallIcon /></a>
              <button className='primary-booknow'>
                Book Now
              </button>

            </div>)
          }

            
         
           
            
        </nav>
    );
}

export default Navbar