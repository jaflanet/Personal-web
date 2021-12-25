import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactSectionHeader,
  ContactHeader,
  ContactSection,
  ContactSectionLeft,
  ContactImageContainer,
  // ContactSectionRight,
  ContactImage,
  // ContacSectionText,
  ContactSectionHeaderText,
  ContactSectionColumn,
  // ContactPageButton,
} from "./contact.element";
import smilePic from "../../assets/contact/smile.png";
import ConList from "./contactList/contactList";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactContent>
          <ContactSectionHeader>
            <ContactHeader>Contact</ContactHeader> <hr />
          </ContactSectionHeader>
          <ContactSection>
            <ContactSectionLeft>
              <ContactSectionColumn>
                <ContactSectionHeaderText>
                  Feel free to contact me
                </ContactSectionHeaderText>
                <ContactImageContainer>
                  <ContactImage src={smilePic} />
                </ContactImageContainer>
              </ContactSectionColumn>
            </ContactSectionLeft>
            <ContactSectionLeft>
              <ConList />
            </ContactSectionLeft>
          </ContactSection>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
