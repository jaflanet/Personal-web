import styled from "styled-components";
import { Element } from "react-scroll";

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
  margin-bottom:2%;
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
    text-align:center;
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
  margin-bottom:2%;
  padding-top: 2px;
  padding-left: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
`;

export const AboutSectionRow = styled.div`
  width: 50%;
  display: flex;
  float: left;
  margin-bottom:2%;
`;

export const AboutSectionPartHalf = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
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
`;

export const AboutSectionPartHalfContent = styled.div`
  padding-bottom: 2%;
`;

export const AboutHeader = styled.header`
  font-size: 38px;
  font-weight: bold;
`;


export const AboutImage1 = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 0 200px 0 0;
  -moz-border-radius: 0 200px 0 0;
  -webkit-border-radius: 0 200px 0 0;
  transform: rotate(-5.19deg);
`;

export const AboutImage1Container = styled.div`
  width: 70%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  @media (max-width: 960px) {
    margin-left: 20%;
  }
`;

export const AboutSectionRowColumn = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
`;

export const AboutImage2 = styled.img`
  width: 50%;
  border-radius: 80px;
  border: 4px;
`;








