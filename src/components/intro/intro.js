import React from "react";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";
import downarrow from "../../assets/intro/down.png";
import foto from "../../assets/intro/foto.png";
import {
  IntroContainer,
  // IntroContainerLeft,
  // IntroContainerRight,
  IntroContainerRightWrapper,
  IntroIMGContainer,
  IntroProfileIMG,
  // IntroRightA,
  IntroRightArrow,
  IntroRightH1,
  IntroRightH2,
  // IntroRightH3,
  IntroLinks,
  IntroContent,
  IntroSectionPart,
  IntroSectionPartHalf,
  // IntroRightSpan,
} from "./intro.element";

const intro = () => {

  return (
    <>
      <IntroContainer id="intro">
        <IntroContent>
          <IntroSectionPart>
            <IntroSectionPartHalf>
              <IntroContainerRightWrapper>
                <IntroRightH2>Hello I'm</IntroRightH2>
                <IntroRightH1>Jonathan Aurelius</IntroRightH1>
                know more about me
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
