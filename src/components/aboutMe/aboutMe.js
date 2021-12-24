import React from "react";
import Skill from "./skills/skill"
import {
  AboutContainer,
  AboutSectionHeader,
  AboutHeader,
  AboutSection,
  AboutSectionPart,
  AboutContent,
  AboutImage1Container,
  AboutSectionPartHalfHeader,
  AboutSectionPartHalfContent,
  AboutSectionPartColumn,
  AboutContainerBg,
  AboutImage2,
  AboutSectionRow,
  AboutSectionRowColumn,
} from "./about.element";

import image_test from "../../assets/about/Logo_Univ.png";

const aboutMe = () => {
  return (
    <>
      <AboutContainerBg id="aboutMe" name="about">
        <AboutContainer>
          <AboutContent>
            <AboutSectionHeader>
              <AboutHeader>My Profile</AboutHeader>
              <hr />
            </AboutSectionHeader>
            <AboutSection>
              <AboutSectionPart>
                <AboutSectionPartColumn>
                  <AboutSectionPartHalfHeader>
                    Education Background
                  </AboutSectionPartHalfHeader>
                  <AboutSectionPartHalfContent>
                    <AboutSectionRow>
                      <AboutSectionRowColumn>
                        <AboutImage1Container>
                          <AboutImage2
                            src={image_test}
                            alt="vision"
                            loading="Lazy"
                          />
                        </AboutImage1Container>
                        Universitas Indonesia
                      </AboutSectionRowColumn>
                    </AboutSectionRow>
                    <AboutSectionRow>
                      <AboutSectionRowColumn>
                        <AboutImage1Container>
                          <AboutImage2
                            src={image_test}
                            alt="vision"
                            loading="Lazy"
                          />
                        </AboutImage1Container>
                        Universitas Indonesia
                      </AboutSectionRowColumn>
                    </AboutSectionRow>
                  </AboutSectionPartHalfContent>
                </AboutSectionPartColumn>
              </AboutSectionPart>

              <AboutSectionPart>
                <AboutSectionPartColumn>
                  <AboutSectionPartHalfHeader>Skill</AboutSectionPartHalfHeader>
                  <AboutSectionPartHalfContent>
                  <Skill />
                  </AboutSectionPartHalfContent>
                </AboutSectionPartColumn>
              </AboutSectionPart>

              <AboutSectionPart>
                <AboutSectionPartColumn>
                  <AboutSectionPartHalfHeader>Bio</AboutSectionPartHalfHeader>
                  <AboutSectionPartHalfContent>
                  <Skill />
                  </AboutSectionPartHalfContent>
                </AboutSectionPartColumn>
              </AboutSectionPart>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default aboutMe;
