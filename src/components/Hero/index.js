import React from 'react';
import Fade from 'react-reveal/Fade';
import { Section, SectionText, SectionTitle } from '../../Styles/PageComponents';
const Hero = () => (
  <>
    <Section>
     
        <SectionTitle main center>
          Welcome <br/> To <br />
          My Portfolio
        </SectionTitle>
        <Fade right big>
        <SectionText>
        Taking the web to a whole new level!
        </SectionText>
        </Fade>
    </Section>
  </>
);

export default Hero;