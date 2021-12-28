import styled from "styled-components";

export const ProjectListCardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2%;
  // background: yellow;
  align: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ProjectListCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 38.5%;
  height: 350px;
  align: center;
  margin: 0 auto;
  padding: 2%;
  margin-bottom: 2%;
  margin-left: 3.5%;
  margin-right: 3.5%;
  float: left;
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(76.15px);
  border-radius: 19px;
  // background: blue;
  margin-top: 1%;
  @media (max-width: 960px) {
    width: 90%;
    margin-left: 3%;
    margin-right: auto;
  }
`;

export const ProjectListCardTitle = styled.div`
  margin-bottom: 3%;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 16px;
  /* or 32px */
  text-align: center;
  text-transform: capitalize;
  &:hover {
    transform: scale(1.1);
    font-color: #e9cf48;
  }
`;

export const ProjectListCardDesc = styled.div`
  margin-top: 3%;
  font-family: "Montserrat";
  font-size: 12px;
  /* or 32px */
  text-align: center;
`;

export const ProjectListCardImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4%;
  border-radius: 19px;
`;

export const ProjectListCardContentContainer = styled.div`
  // background: green;
  width: 95%;
  margin: 0 auto;
  margin-top: -2%;
`;

export const ProjectListCardImg = styled.img`
  width: 450px;
  height: 250px;
  object-fit: cover;
  border-radius: 19px;
  @media (max-width: 960px) {
    width: 97%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ShowButton = styled.button`
  margin: 0 auto;
  display: block;
  border: none;
  background: transparent;
  font-size: 20px;
  text-decoration-line: underline;
  margin-bottom: 3%;
`;

export const ShowButtonContainer = styled.div`
  align-items: center;
  margin: 0 auto;
`;

export const ProjectLink = styled.a`
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
