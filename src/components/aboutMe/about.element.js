import styled from "styled-components";
import { Element } from "react-scroll";

// import { fadeInUp } from 'react-animations';

// const slideUp = keyframes`${fadeInUp}`;

export const AboutContainerBg = styled(Element)`
  background-color: #fff3e6;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
  font-family: Montserrat;
  overflow-x: hidden;
`;

export const AboutContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
  position: relative;
`;
export const AboutContent = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  max-width: 1230px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
`;

export const AboutSectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding-top: 2%;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const AboutSection = styled.div`
  margin-left: auto;
  display: flex;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 2%;
  @media (max-width: 960px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const AboutSectionPart = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  margin-bottom: 2%;
  padding-top: 2px;
  padding-left: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // background-color: red;
  @media (max-width: 960px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const AboutSectionPart2 = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding-top: 2px;
  padding-left: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    overflow-x: hidden;
  }
`;

export const AboutSectionPartColumn = styled.div`
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
    margin-bottom: 3%;
  }
`;

export const AboutSectionRow = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-bottom: 2%;
  margin-right: 2%;
  // background-color: red;
  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
    margin-bottom: 3%;
  }
`;

export const AboutSectionPartHalf = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
  margin-bottom: 3%;
  // background-color: red;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
export const AboutSectionPartHalfHeader = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  // top: 50%;
  // left: 50%;
  margin: 0 auto;
  margin-bottom: 4%;
`;

export const AboutSectionPartHalfHeader2 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  // top: 50%;
  // left: 50%;
  margin: 0 auto;
  margin-bottom: 4%;
  margin-left: 15%;
  @media (max-width: 960px) {
    margin-left: 0%;
  }
`;

export const AboutSectionPartHalfContent = styled.div`
  padding-bottom: 2%;
  margin-bottom: 3%;
`;

export const AboutHeader = styled.header`
  font-size: 38px;
  font-weight: bold;
`;

export const AboutImage1Container = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  display: block;
  @media (max-width: 960px) {
    margin-bottom: 2%;
  }
`;

export const AboutSectionRowColumn = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  @media (max-width: 960px) {
    margin-bottom: 2%;
  }
`;

export const AboutDownloadButton = styled.button`
  margin-left: 5px;
  margin-right: auto;
  font-family: "Montserrat Regular";
  font-size: 15px;
  margin-top: 10px;
  padding: 10px;
  text-align:center;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
`;

export const AboutImage2 = styled.img`
  width: 50%;
`;
