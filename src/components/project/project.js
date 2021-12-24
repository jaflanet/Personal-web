import React from "react";
import {
  AboutContainer,
  AboutSectionHeader,
  AboutHeader,
  AboutSection,
  AboutSectionPart,
  AboutSectionPart2,
  AboutSectionPartHalf,
  AboutContent,
  AboutImage1Container,
  AboutSectionPartHalfHeader,
  AboutSectionPartColumn,
  AboutContainerBg,
} from "./about.element";

const project = () => {
  return (
    <>
      <AboutContainerBg id="project" >
        <AboutContainer>
          <AboutContent>
            <AboutSectionHeader>
              <AboutHeader>My Project</AboutHeader>
            </AboutSectionHeader>
            <AboutSection>
              <AboutSectionPart>
                <AboutSectionPartHalf>
                  <AboutImage1Container>
                    {/* <AboutImage1 src={image_test} alt="vision" loading="Lazy" /> */}
                  </AboutImage1Container>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      Project 1
                    </AboutSectionPartHalfHeader>
                  
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
              </AboutSectionPart>
              <AboutSectionPart2>
                <AboutSectionPartHalf>
                  <AboutSectionPartColumn>
                    <AboutSectionPartHalfHeader>
                      Project 2
                    </AboutSectionPartHalfHeader>
                    
                  </AboutSectionPartColumn>
                </AboutSectionPartHalf>
                <AboutSectionPartHalf>
                  <AboutImage1Container>
                    {/* <AboutImage2 src={image_test} alt="vision" loading="Lazy" /> */}
                  </AboutImage1Container>
                </AboutSectionPartHalf>
              </AboutSectionPart2>
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default project;

