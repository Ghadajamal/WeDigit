import React, {useState} from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover]=useState(false)

    const onHover =() => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>The Home For Your Services</HeroH1>
            <HeroP>
                Digitalize now your services and find solutions adapted to your needs.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover } 
                primary='true' 
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Dig into it {hover ? <ArrowForward/> : <ArrowRight/> }
                </Button>
            </HeroBtnWrapper>

        </HeroContent>

    </HeroContainer>
  );
};

export default HeroSection;