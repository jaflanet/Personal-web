import React from "react";
import {
  Footer,
  FooterContainer,
  FooterLeft,
  // FooterLogoContainer,
  // FooterLink,
  FooterText,
  // FooterImgLogo,
} from "./footer.elements";

// import Linkedin_logo from "../../assets/image/footer/Group 111.png";
// import Insta_logo from "../../assets/image/footer/Group 112.png";
// import Youtube_logo from "../../assets/image/footer/Group 113.png";

const footer = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterLeft>
          <FooterText>Copyright @JonathanAurelius</FooterText>
        </FooterLeft>
      </FooterContainer>
    </Footer>
  );
};
export default footer;
