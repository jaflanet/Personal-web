import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { fadeInLeft,fadeInRight } from 'react-animations';

const slideLeft = keyframes`${fadeInLeft}`;
const slideRight= keyframes`${fadeInRight}`;
 

export const IntroLinks = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-family: "Montserrat";
  cursor: pointer;
  margin: 0 auto;
  // @media screen and (max-width: 960px) {
  //   text-align: center;
  //   padding: 2rem 0rem 0rem 0;
  //   width: 100%;
  //   display: table;
  //   &:hover {
  //     color: black;
  //     transition: all 0.3s ease;
  //   }
  // }
`;

export const IntroContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-family: "Montserrat";
  // background-color:blue;
`;

export const IntroSectionPart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  // background-color:green;
  @media (max-width: 960px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const IntroContainer = styled.div`
  background-color: #fff3e6;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
export const IntroContainerLeft = styled.div`
  flex: 0.5;
  overflow: hidden;
  align: center;
  background-color: green;
`;

export const IntroIMGContainer = styled.div`
  width: 400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  background-color: #fff9f2;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;
  animation: 1s ${slideRight};
`;
export const IntroProfileIMG = styled.img`
  height: 100%;
  border-radius: 50%;
`;
export const IntroContainerRight = styled.div`
  flex: 0.5;
  position: relative;
`;

export const IntroContainerRightWrapper = styled.div`
  width: 90%;
  height: 100%;
  padding-left: 50px;
  animation: 1s ${slideLeft};
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color:blue;
  @media (max-width: 960px) {
    width: 100%;
    padding-left: 0px;
  }
`;

export const IntroRightH1 = styled.h1`
  font-family: "Montserrat";
  font-size: 60px;
  text-align: center;
  // background-color: yellow;
  margin-top: 0;
 
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const IntroRightH12 = styled.h1`
  font-family: "Montserrat";
  color: #065678;
  font-size: 60px;
  text-align: center;
  // background-color: yellow;
  margin-top: 0;
`;

export const IntroRightH2 = styled.h2`
  font-family: "Montserrat";
  font-size: 15px;
  text-align: center;
`;

export const IntroRightH3 = styled.h3`
  font-family: "Montserrat";
  font-size: 30px;
`;
export const IntroRightSpan = styled.span`
  font-size: inherit;
  color: crimson;
`;
export const IntroRightA = styled.a`
  position: absolute;
  bottom: 10px;
  left: 40%;
`;

export const IntroRightArrow = styled.img`
  width: 40px;
  animation: arrowBlink 2s infinite;
  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;

export const IntroSectionPartHalf = styled.div`
  width: 50%;
  display: flex;
  float: left;

  // background-color: red;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
