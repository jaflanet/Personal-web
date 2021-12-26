import React from "react";
import {
  AboutSkillCard,
  AboutSkillCardContentContainer,
  AboutSkillCardImg,
  AboutSkillCardImageContainer,
  AboutSkillCardTitle,
  AboutSkillCardContainer,
} from "./skill.element";
import C_ico from "../../../assets/Icon/c-icon.png";
import Flutter from "../../../assets/Icon/flutter-icon.png";
import Java from "../../../assets/Icon/java-icon.png";
import NextJs from "../../../assets/Icon/nextjs-icon.png";
import CSS from "../../../assets/Icon/css-icon.png";
import HTML from "../../../assets/Icon/html-icon.png";
import Reactico from "../../../assets/Icon/react-icon.png";
import SQL from "../../../assets/Icon/sql-icon.png";
import psIco from "../../../assets/Icon/ps-icon.png";
import aiIco from "../../../assets/Icon/ai-icon.png";
import netIco from "../../../assets/Icon/net-icon.png";
import premiere from "../../../assets/Icon/premiere-icon.png";
import ae from "../../../assets/Icon/ae-icon.png";
import figma from "../../../assets/Icon/figma-icon.png";

const skill = () => {
  return (
    <>
      <AboutSkillCardContainer>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={C_ico} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> C Programming Language</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={Flutter} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Flutter</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={Java} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Java</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={NextJs} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Next JS</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={CSS} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> CSS</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={HTML} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> HTML</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={Reactico} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> React.js</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={SQL} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> SQL</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={psIco} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Adobe Photoshop</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={aiIco} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Adobe Illustrator</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={netIco} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Networking</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={premiere} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Adobe Premiere Pro</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={ae} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Adobe After Effect</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>
        <AboutSkillCard>
          <AboutSkillCardContentContainer>
            <AboutSkillCardImageContainer>
              <AboutSkillCardImg src={figma} alt="vision" loading="Lazy" />
            </AboutSkillCardImageContainer>
            <AboutSkillCardTitle> Figma</AboutSkillCardTitle>
          </AboutSkillCardContentContainer>
        </AboutSkillCard>{" "}
      </AboutSkillCardContainer>
    </>
  );
};

export default skill;
