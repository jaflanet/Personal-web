import React, { useState } from "react";
import {
  AboutSkillCard,
  AboutSkillCardContentContainer,
  AboutSkillCardImg,
  AboutSkillCardImageContainer,
  AboutSkillCardTitle,
  AboutSkillCardContainer,
} from "./skill.element";
import {SkillList} from "./skillList";


const Skill = () => {
  const [data] = useState(SkillList);
  return (
    <>
      <AboutSkillCardContainer>
        {data.map((skillData =>(
            <AboutSkillCard>
            <AboutSkillCardContentContainer>
              <AboutSkillCardImageContainer>
                <AboutSkillCardImg src={skillData.icon} alt="vision" loading="Lazy" />
              </AboutSkillCardImageContainer>
              <AboutSkillCardTitle> {skillData.title}</AboutSkillCardTitle>
            </AboutSkillCardContentContainer>
          </AboutSkillCard>
        ) ))}
      </AboutSkillCardContainer>
    </>
  );
};

export default Skill;
