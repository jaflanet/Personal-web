import React from "react";
import downarrow from "../../assets/intro/down.png";
import foto from "../../assets/intro/foto.png";
import {
  IntroContainer,
  IntroContainerRightWrapper,
  IntroIMGContainer,
  IntroProfileIMG,
  IntroRightArrow,
  IntroRightH1,
  IntroRightH2,
  IntroLinks,
  IntroContent,
  IntroSectionPart,
  IntroSectionPartHalf,
  IntroRightH12,
} from "./intro.element";

const intro = () => {

  return (
    <>
      <IntroContainer id="intro">
        <IntroContent>
          <IntroSectionPart>
            <IntroSectionPartHalf>
              <IntroContainerRightWrapper>
                <IntroRightH1>Hello I'm</IntroRightH1>
                <IntroRightH12>Jonathan Aurelius</IntroRightH12>
                <IntroRightH2> know more about me </IntroRightH2>
                <IntroLinks
                  activeClass="active"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <IntroRightArrow src={downarrow} alt="" />
                </IntroLinks>{" "}
              </IntroContainerRightWrapper>
            </IntroSectionPartHalf>
            <IntroSectionPartHalf>
              <IntroIMGContainer>
                <IntroProfileIMG src={foto} alt="" />
              </IntroIMGContainer>
            </IntroSectionPartHalf>
          </IntroSectionPart>
        </IntroContent>
      </IntroContainer>
    </>
  );
};

export default intro;
