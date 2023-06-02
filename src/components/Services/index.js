import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-6.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP
      } from './ServicesElements' ;

const Services  = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Check Out Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Growth</ServicesH2>
          <ServicesP>We help you grow and shape the future.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Building websites</ServicesH2>
          <ServicesP>We help you build your own website to reach the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>digitalizing</ServicesH2>
          <ServicesP>You can digitalize your system for free. </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services; 