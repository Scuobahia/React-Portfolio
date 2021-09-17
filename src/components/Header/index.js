import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { Container, DivT, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import Fade from 'react-reveal/Fade';
const Header = () =>  (
  <Container>
    <DivT>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"rgb(249, 250, 136)", textDecoration:"none" }}>
           <span>Antonio Sanchez</span>
        </a>
      </Link>
    </DivT>
    {/* Tabs for the Header Menu */}
    <Div2>
      <Fade left big>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>   
      </Fade>     
    </Div2>
      <Div3>
        <SocialIcons href="https://github/Scuobahia.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://facebook.com">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;