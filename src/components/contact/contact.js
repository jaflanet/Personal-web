import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactSectionHeader,
  ContactHeader,
  ContactSection,
  ContactSectionLeft,
  // ContactSectionRight,
  ContactImage,
  ContacSectionText,
  ContactSectionHeaderText,
  ContactSectionColumn,
  ContactPageButton,
} from "./contact.element";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactContent>
          <ContactSectionHeader>
            <ContactHeader>Contact</ContactHeader>
          </ContactSectionHeader>
          <ContactSection>
            <ContactSectionLeft>
              <ContactSectionColumn>
                <ContactSectionHeaderText>
                  Feel free to contact me
                </ContactSectionHeaderText>
                {/* <ContacSectionText>
                  Got any questions? Kindly click the button below!
                </ContacSectionText>
                <ContactPageButton
                  href="https://linktr.ee/uifashionweek21"
                  target="_blank"
                >
                  Contact Us
                </ContactPageButton> */}
              </ContactSectionColumn>
            </ContactSectionLeft>
            <ContactSectionLeft>
              {/* <ContactImage src={image_1} /> */}
            </ContactSectionLeft>
          </ContactSection>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
