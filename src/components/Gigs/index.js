import React from 'react';
import One from '../../images/one.jpg';
import Two from '../../images/two.jpg';
import Three from '../../images/three.jpg';
import {
  RecContainer,
  RecH1,
  RecWrapper,
  RecCard,
  MobileIcon,
  BarIcon,
  RecIcon,
  RecH2,
  RecP,
  Favorites

} from './GigsElements';
import { FaRegHeart } from 'react-icons/fa';
import { FaUserCircle } from '../Usernav/Userside/UsersideElements';
import { FaAngleDown } from 'react-icons/fa';



const Recommendation = () => {
  return (
    <>
        <RecContainer id="services">
      <RecH1>Recommended for you </RecH1>
      <RecWrapper>
        <RecCard>
          <MobileIcon>
            <FaUserCircle />
           </MobileIcon>
           <BarIcon>
            <FaAngleDown/>
           </BarIcon>
          <RecIcon src={One}/>
          <RecH2>Steve Charles</RecH2>
          <RecP>Hey there I offer to make nani nana text text text text text text .</RecP>
          <Favorites>
            <FaRegHeart/>
          </Favorites>
        </RecCard>

        <RecCard>
          <MobileIcon>
            <FaUserCircle />
           </MobileIcon>
           <BarIcon>
            <FaAngleDown/>
           </BarIcon>
          <RecIcon src={Two}/>
          <RecH2>Steve Charles</RecH2>
          <RecP>Hey there I offer to make nani nana text text text text text text .</RecP>
          <Favorites>
            <FaRegHeart/>
          </Favorites>
        </RecCard>

        <RecCard>
          <MobileIcon>
            <FaUserCircle />
           </MobileIcon>
           <BarIcon>
            <FaAngleDown/>
           </BarIcon>
          <RecIcon src={Three}/>
          <RecH2>Steve Charles</RecH2>
          <RecP>Hey there I offer to make nani nana text text text text text text .</RecP>
          <Favorites>
            <FaRegHeart/>
          </Favorites>
        </RecCard>

        <RecCard>
          <MobileIcon>
            <FaUserCircle />
           </MobileIcon>
           <BarIcon>
            <FaAngleDown/>
           </BarIcon>
          <RecIcon src={One}/>
          <RecH2>Steve Charles</RecH2>
          <RecP>Hey there I offer to make nani nana text text text text text text .</RecP>
          <Favorites>
            <FaRegHeart/>
          </Favorites>
        </RecCard>

        <RecCard>
          <MobileIcon>
            <FaUserCircle />
           </MobileIcon>
           <BarIcon>
            <FaAngleDown/>
           </BarIcon>
          <RecIcon src={One}/>
          <RecH2>Steve Charles</RecH2>
          <RecP>Hey there I offer to make nani nana text text text text text text .</RecP>
          <Favorites>
            <FaRegHeart/>
          </Favorites>
        </RecCard>

        <RecCard>
          <MobileIcon>
            <FaUserCircle />
           </MobileIcon>
           <BarIcon>
            <FaAngleDown/>
           </BarIcon>
          <RecIcon src={One}/>
          <RecH2>Steve Charles</RecH2>
          <RecP>Hey there I offer to make nani nana text text text text text text .</RecP>
          <Favorites>
            <FaRegHeart/>
          </Favorites>
        </RecCard>
      </RecWrapper>
    </RecContainer>
    </>
  )
}

export default Recommendation;


