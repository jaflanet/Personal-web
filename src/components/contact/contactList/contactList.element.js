import styled from "styled-components";
// import { Element } from "react-scroll";

export const ContactCardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  position: relative;
  @media (max-width: 930px) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const ContactCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 40px;
  align: center;
  margin: 0 auto;
  padding: 1%;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 10%;
  margin-bottom: 10%;
  @media (max-width: 930px) {
    width: 80%;
  }
`;

export const ContactCardRow = styled.div`
  display: flex;
  float: left;
  padding-right: 10%;
  // background-color:pink;
  @media (max-width: 930px) {
    padding-right: 2%;
  }
`;

export const ContactCardTitle = styled.div`
  font-family: "Montserrat";
  font-size: 14px;
  text-align: center;
  align: center;
  margin: 0;
  margin-left:2%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  // background-color:red;
  @media (max-width: 930px) {
    // padding-right: 2%;
    // margin: 0 auto;
    font-size: 10px;
  }
`;

export const ContactCardImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  // background: green;

`;

export const ContactCardContentContainer = styled.div`
  // background: yellow;
  padding-left: 10%;
  width: 100%;
  height: 90%;
  @media (max-width: 930px) {
    padding-left: 5%;
    width: 90%;
  }
`;

export const ContactCardImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 40px;
  height: 40px;
  object-fit: cover;
  align: center;
  // background: red;
  @media (max-width: 930px) {
    // width:95%;
  }
`;

export const ContactPageButton = styled.a`
  font-style: inherit;
  color: inherit;
  background-color: transparent;
  font-size: inherit;
  text-decoration: none;
  font-variant: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-family: inherit;
`;
