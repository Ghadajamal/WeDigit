import React from 'react';
import {
       SidebarContainer, 
       Icon, 
       CloseIcon, 
       SidebarWrapper, 
       SidebarMenu,
       SidebarLink,
       FaUserCircle, 
       IconWrapper
       } from "./UsersideElements";

const Userside = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                  <IconWrapper>
                  <FaUserCircle/>
                  </IconWrapper>
                  <h2>Username</h2>
                <hr/>
                <SidebarLink href='/user' onClick={toggle}>
                   Home 
                </SidebarLink>
                <SidebarLink href='/messages' target='_blank'>
                   Messages 
                </SidebarLink>
                <SidebarLink to="/orders" onClick={toggle}>
                   Manage Orders 
                </SidebarLink>  
                <SidebarLink to="/favorites" onClick={toggle}>
                   My favourites
                </SidebarLink>
                <SidebarLink to="/categories" onClick={toggle}>
                   Browse Categories 
                </SidebarLink> 
                <SidebarLink to="/explore" onClick={toggle}>
                   Explore
                </SidebarLink> 
                <h2>My profile</h2>
                <hr/> 
                <SidebarLink to="/managerequests" onClick={toggle}>
                   Manage Requests 
                </SidebarLink>  
                <SidebarLink to="/postrequest" onClick={toggle}>
                   Post a Request 
                </SidebarLink> 
                <h2>General</h2>
                <hr/>
                <SidebarLink to="/settings" onClick={toggle}>
                   Settings 
                </SidebarLink> 
                <SidebarLink to="/logout" onClick={toggle}>
                   Logout 
                </SidebarLink>                                     
            </SidebarMenu>

        </SidebarWrapper>
    </SidebarContainer>
      );
};

export default Userside ;