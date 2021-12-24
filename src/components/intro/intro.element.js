import styled from "styled-components";
import { Link } from "react-scroll";

export const IntroLinks = styled(Link)`
  color: #000000;
  text-decoration: none;
  cursor: pointer;
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
`;

export const IntroSectionPart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const IntroContainer = styled.div`
  background-color: #FFF3E6;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IntroRightH1 = styled.h1`
  font-size: 60px;
`;
export const IntroRightH2 = styled.h2`
  font-size: 35px;
`;

export const IntroRightH3 = styled.h3`
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
  width: 30px;
  animation: arrowBlink 2s infinite;
  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;

export const IntroSectionPartHalf = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-top: 5%;
  // background-color: red;
  @media (max-width: 960px) {
    width: 100%;
  }
`;