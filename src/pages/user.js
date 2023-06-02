import React, { useState } from 'react'
import Recommendation from '../components/Gigs';
import Slider from '../components/UserCarousel/Slider';
import UserFooter from '../components/Userfooter';
import UserHeader from '../components/Usernav';
import Userside from '../components/Usernav/Userside';



const UserPage = () => {
  const [isOpen, setIsOpen] = useState(false)
    
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      <UserHeader toggle={toggle}/>
      <Userside  isOpen={isOpen} toggle={toggle} />
      <Slider/>
      <Recommendation/>
      <UserFooter/>
    </>
  )
}

export default UserPage;

