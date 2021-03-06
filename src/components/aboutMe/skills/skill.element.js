import styled from "styled-components";
// import { Element } from "react-scroll";

export const AboutSkillCardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2%;
  margin-left:10%;
  // background-color: red;
  align: center;
  @media (max-width: 960px) {
    padding: 2%;
    }
`;
export const AboutSkillCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 100px;
  align: center;
  margin: 0 auto;
  padding: 1%;
  float: left;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 5%;
  margin-left: 5%;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 960px) {
    }
`;

export const AboutSkillCardTitle = styled.div`
  margin-top: 10%;
  font-family: "Montserrat Regular";
  font-size: 10px;
  text-align:center;
  text-transform: capitalize;
  align:center;
  // background-color:red;
`;


export const AboutSkillCardImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  // background: green;
`;

export const AboutSkillCardContentContainer = styled.div`
  // background: yellow;
  width: 100%;
  margin-top:7%;
  height: 90%;
`;

export const AboutSkillCardImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  align:center;
  // background: red;
`;