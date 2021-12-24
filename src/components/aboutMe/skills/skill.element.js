import styled from "styled-components";
import { Element } from "react-scroll";

export const AboutSkillCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 100px;
  align: center;
  margin: 0 auto;
  padding: 0.5%;
  float: left;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 1%;
`;

export const AboutSkillCardTitle = styled.div`
  margin-top: 5%;
  font-family: "Metropolis Regular";
  font-size: 12px;
  /* or 32px */

  text-transform: capitalize;
`;


export const AboutSkillCardImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4%;
`;

export const AboutSkillCardContentContainer = styled.div`
  // background: green;
  width: 95%;
  margin: 0 auto;
  height: 96%;
`;

export const AboutSkillCardImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;