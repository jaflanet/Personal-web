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
  AboutSectionPartHalfHeader2,
  AboutSectionPartHalfContent,
  AboutSectionPartColumn,
  AboutContainerBg,
  AboutImage2,
  AboutSectionRow,
  AboutSectionRowColumn,
  AboutDownloadButton,
} from "./about.element";
import cvFile from "../../assets/about/CV_Jonathan_Aurelius_Faren.pdf";
import portoFile from "../../assets/about/portofolio_jonathan_aurelius.pdf";
import image_univ from "../../assets/about/Logo_Univ.png";
import image_sekolah from "../../assets/about/Logo_ipeka.png";
import porto_icon from "../../assets/about/Porto_icon.png";
import cv_icon from "../../assets/about/CV_icon.png";

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
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      CV {"&"} Portofolio
                    </AboutSectionPartHalfHeader>
                    <AboutSectionPartHalfContent>
                      <AboutSectionRow>
                        <AboutSectionRowColumn>
                          <AboutImage1Container>
                            <AboutImage2
                              src={cv_icon}
                              alt="vision"
                              loading="Lazy"
                            />
                          </AboutImage1Container>
                          <div>
                          <a href={cvFile} download="cv">
                            <AboutDownloadButton>
                              Download Resume
                            </AboutDownloadButton>
                          </a></div>
                        </AboutSectionRowColumn>
                      </AboutSectionRow>
                      <AboutSectionRow>
                        <AboutSectionRowColumn>
                          <AboutImage1Container>
                            <AboutImage2
                              src={porto_icon}
                              alt="vision"
                              loading="Lazy"
                            />
                          </AboutImage1Container>
                          <a href={portoFile} download="portofolio">
                            <AboutDownloadButton>
                              Download Portofolio
                            </AboutDownloadButton>
                          </a>
                        </AboutSectionRowColumn>
                      </AboutSectionRow>
                    </AboutSectionPartHalfContent>
                  </AboutSectionPartColumn>
                </AboutSectionPart>
              </AboutSectionRow>

              <AboutSectionRow>
                <AboutSectionPart>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader2>
                      Skill
                    </AboutSectionPartHalfHeader2>
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
