import React from "react";
import Skill from "./skills/skill";
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

import image_univ from "../../assets/about/Logo_Univ.png";
import image_sekolah from "../../assets/about/Logo_ipeka.png";

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

              <AboutSectionRow>
                <AboutSectionPart>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>Bio</AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfContent>
                      I am a 20-year-old computer engineer major interest in
                      frontend engineering, android/ios dev, and cyber security.
                    </AboutSectionPartHalfContent>
                  </AboutSectionPartColumn>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      Education Background
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfContent>
                      <AboutSectionRow>
                        <AboutSectionRowColumn>
                          <AboutImage1Container>
                            <AboutImage2
                              src={image_univ}
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
                              src={image_sekolah}
                              alt="vision"
                              loading="Lazy"
                            />
                          </AboutImage1Container>
                          IPEKA Puri Senior HighSchool
                        </AboutSectionRowColumn>
                      </AboutSectionRow>
                    </AboutSectionPartHalfContent>
                  </AboutSectionPartColumn>
                </AboutSectionPart>
              </AboutSectionRow>

              <AboutSectionRow>
                <AboutSectionPart>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      Skill
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfContent>
                      <Skill />
                    </AboutSectionPartHalfContent>
                  </AboutSectionPartColumn>
                </AboutSectionPart>
              </AboutSectionRow>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default aboutMe;
