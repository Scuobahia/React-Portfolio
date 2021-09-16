import React from 'react';
import { DiFirebase, DiReact, } from 'react-icons/di';
import { Section, SectionText, SectionTitle } from '../../Styles/PageComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>A little something about me...</SectionTitle>
    <SectionText>
    I graduated from the University of Utah coding bootcamp as a full stack developer.
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