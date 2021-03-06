import styled from "styled-components";

export const ContactContainer = styled.div`
background-color: #fff3e6;
  z-index: 1;
  width: 100%;
  max-height: 1080px;
  margin-left: auto;
  margin-right: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
  max-width: 1230px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align: center;
  
`;

export const ContactSectionHeader = styled.div`
  font-size: 32px;
  line-height: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  padding: 1%;
  margin: 0;
  @media (max-width: 930px) {
    text-align:center;
  }
  
`;

export const ContactSectionHeaderText = styled.div`
  font-family: "Montserrat";
  font-size: 32px;
  line-height: 40px;
 text-align:center;
  width: 100%;
  overflow: hidden;
  // background-color:blue;
  @media (max-width: 930px) {
    // flex-direction: column-reverse;
  }
`;

export const ContactHeader = styled.header`
  font-family: "Montserrat";
  font-size: 38px;
  font-weight: bold;
`;

export const ContactSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 930px) {
    flex-direction: column-reverse;
    //  background-color:red;
  }
`;

export const ContactSectionLeft = styled.div`
  width: 48%;
  display: flex;
  float: left;
  margin-left:2%;
  // background-color:red;
  @media (max-width: 930px) {
    width: 100%;
    margin-left:0%;
  }
`;
export const ContactSectionRight = styled.div`
  width: 48%;
  display: flex;
  float: right;
  margin-top: 5%;
  background: blue;
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const ContactImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  margin-top:2%;
  // background: green;
`;

export const ContactImage = styled.img`
width: 50%;
margin-left: auto;
  margin-right: auto;
  display: block;
  @media (max-width: 930px) {
    width: 70%;
  }
`;
export const ContacSectionHeader = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  // top: 50%;
  // left: 50%;
  width: 100%;
`;

export const ContacSectionText = styled.div`
Font family: "Montserrat";
font-size: 16px;
line-height: 152%;
text-align:center;
Align: Justified;
margin-top:5%;
// top: 50%;
//   left: 50%;

@media (max-width:930px) {
  font-size: 14px;
  padding-right:10%;
}
`;

export const ContactSectionColumn = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2px;
  @media (max-width:930px) {
    width:100%;
    margin-bottom:5%;
  }
`;

export const ContactPageButton = styled.a`
  background: #03a301;
  left: 0;
  border: 3px solid black;
  border-color: #03a301;
  border-radius: 15px;
  color: white;
  width: 190px;
  height: 30px;
  padding-top: 12px;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  opacity: 1;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 5%;
  cursor: pointer;

  &:hover {
    background: none;
    color: #ffffff;
  }

  @media (max-width: 930px) {
    padding-top: 8px;
    width: 150px;
    height: 20px;
    font-size: 14px;
    margin-top: 10%;
    margin-left: 20%;
    margin-bottom: 10%;
  }
`;
