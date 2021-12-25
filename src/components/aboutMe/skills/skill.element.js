import styled from "styled-components";
// import { Element } from "react-scroll";

export const AboutSkillCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 90px;
  align: center;
  margin: 0 auto;
  padding: 1%;
  float: left;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 2%;
`;

export const AboutSkillCardTitle = styled.div`
  margin-top: 5%;
  font-family: "Montserrat Regular";
  font-size: 10px;
  margin-left: 20%;
  text-transform: capitalize;
  align:center;
`;


export const AboutSkillCardImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align: center;
`;

export const AboutSkillCardContentContainer = styled.div`
  // background: green;
  width: 100%;
  margin: 0 auto;
  height: 96%;
`;

export const AboutSkillCardImg = styled.img`
  margin-left: 22%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  align:center;
`;