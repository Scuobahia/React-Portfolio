import React from 'react';
import Fade from 'react-reveal/Fade';
import { Section, SectionText, SectionTitle } from '../../Styles/PageComponents';
import ME from '../../me.jpeg';
const Hero = () => (
  <>
    <Section>
     
        <SectionTitle main center>
          Welcome <br/> To <br />
          My Portfolio
        </SectionTitle>
        <img className="ME" src ={ME}/>
        <Fade right big>
        <SectionText>
        Taking the web to a whole new level!
        </SectionText>
        </Fade>
    </Section>
  </>
);

export default Hero;