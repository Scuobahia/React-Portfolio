import React from 'react';
import { DiFirebase, DiReact, } from 'react-icons/di';
import { Section, SectionText, SectionTitle } from '../../Styles/PageComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>A little something about me...</SectionTitle>
    <SectionText>
    Hey there! I graduated from the University of Utah coding bootcamp as a full stack developer. Aside from creating cool websites like
    the ones you just had the pleasure of browsing through
    (which there is plenty more on the way) I balance a chaotic and comforting family life.
    I have a beatiful wife and four incredible children.
    I love to play chess, and not to brag but I am almost pass a 2000 rating!
    Playing video games is a must in my scarce
    free time. To be honest, my Playstaion sees more Netflix than actual games
    but it does get to enjoy a good RPG every once in a while.
    Essentially, I love building and not only web content, I also own a
    construction bussiness and I have a passion for building smart, modern
    and beautiful homes.
    </SectionText>
    <br/>
    <SectionText>
    My journey throught my education:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML, CSS and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;