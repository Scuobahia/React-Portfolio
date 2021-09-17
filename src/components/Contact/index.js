import React from 'react';
import { Section, SectionText, SectionTitle } from '../../Styles/PageComponents';
import { Div, Form, Label, Button, } from './ContactStyles';
function Contact() {

    return (
        <Section id="contact">
            <SectionTitle></SectionTitle>
            <Div>
                <SectionText>Please Reach Out:</SectionText>

                <Div>
                    <Form>

                        <Label for="name">Your Name</Label>
                        <input type="text" name="name" placeholder="Name"/>

                        <Label for="email">Email</Label>
                        <input type="text" name="email" placeholder="Email@example.com" />


                        <Label for="subject">Subject</Label>
                        <input id="subject" type="text" name="subject" placeholder="Reach Out!"></input>

                        <Button>Submit</Button>
                       

                    </Form>
                </Div>
            </Div>
        </Section>
    )
}

export default Contact;