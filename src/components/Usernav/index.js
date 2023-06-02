import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";



import {  animateScroll as scroll} from 'react-scroll';
import { 
    Nav,
    NavbarContainer,
    Navlogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
   } from './userHeaderElements';



const UserHeader = ({toggle}) => {

        const [scrollNav, setScrollNav] = useState(false)
        
        const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
        }
        
        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, [])
        
        const toggleHome = ()=> {
            scroll.scrollToTop();
        };
        
  return (
    <>
      <IconContext.Provider value={{ color: '#eb63d8'}}>
    <Nav scrollNav= {scrollNav}>
        <NavbarContainer>
           <Navlogo to='/' onClick={toggleHome}>WeDigit</Navlogo>
           <MobileIcon onClick={toggle}>
            <FaBars />
           </MobileIcon>
           <NavMenu>
            <NavItem>
                <NavLinks href="/favorites"  target="_blank"  alt='Favorites'>
                    <FaRegHeart/>
                </NavLinks>

                <NavLinks href="/notifications" target="_blank" aria-label='notifications' alt='Notifications' >
                <FaBell/>
                </NavLinks>

                <NavLinks href="/messages" target="_blank" aria-label="messages" alt='Messages' >
                    <FaRegCommentDots/>
                </NavLinks>

                <NavLinks href="/orders" target="_blank" aria-label="orders" alt='Orders' >
                    <FaListAlt/>
                </NavLinks>

                <NavLinks href="/profile" target="_blank" aria-label="profile" alt='Username' >
                   <FaUserCircle/>
                </NavLinks>

            </NavItem>      
           </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};


export default UserHeader ;
