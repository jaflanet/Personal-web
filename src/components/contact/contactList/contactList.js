import React from "react";
import {
  ContactCard,
  ContactCardContentContainer,
  ContactCardImg,
  ContactCardImageContainer,
  ContactCardTitle,
  ContactCardRow,
  ContactCardContainer,
  ContactPageButton,
} from "./contactList.element";
import email from "../../../assets/contact/email-ico.png";
import github from "../../../assets/contact/github-ico.png";
import linkedin from "../../../assets/contact/linkedin-ico.png";

const ContactList = () => {
  return (
    <>
      <ContactCardContainer>
        <ContactPageButton href="https://mail.google.com/" target="_blank">
          <ContactCard>
            <ContactCardContentContainer>
              {" "}
              <ContactCardRow>
                <ContactCardImageContainer>
                  <ContactCardImg src={email} alt="vision" loading="Lazy" />
                </ContactCardImageContainer>
              </ContactCardRow>
              <ContactCardRow>
                <ContactCardTitle> Jonathanfaren@gmail.com</ContactCardTitle>
              </ContactCardRow>
            </ContactCardContentContainer>
          </ContactCard>
        </ContactPageButton>

        <ContactPageButton href="https://github.com/jaflanet" target="_blank">
          <ContactCard>
            <ContactCardContentContainer>
              {" "}
              <ContactCardRow>
                <ContactCardImageContainer>
                  <ContactCardImg src={github} alt="vision" loading="Lazy" />
                </ContactCardImageContainer>
              </ContactCardRow>
              <ContactCardRow>
                <ContactCardTitle> github.com/jaflanet</ContactCardTitle>
              </ContactCardRow>
            </ContactCardContentContainer>
          </ContactCard>
        </ContactPageButton>

        <ContactPageButton
          href="https://www.linkedin.com/in/jonathan-faren-95a337140"
          target="_blank"
        >
          <ContactCard>
            <ContactCardContentContainer>
              {" "}
              <ContactCardRow>
                <ContactCardImageContainer>
                  <ContactCardImg src={linkedin} alt="vision" loading="Lazy" />
                </ContactCardImageContainer>
              </ContactCardRow>
              <ContactCardRow>
                <ContactCardTitle>
                  {" "}
                  linkedin.com/in/jonathan-faren-95a337140
                </ContactCardTitle>
              </ContactCardRow>
            </ContactCardContentContainer>
          </ContactCard>
        </ContactPageButton>
      </ContactCardContainer>
    </>
  );
};

export default ContactList;
