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
import List from "./list/list"

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
              <List />
            </AboutSection>
          </AboutContent>
        </AboutContainer>
      </AboutContainerBg>
    </>
  );
};

export default project;

