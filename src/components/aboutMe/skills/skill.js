import React from 'react'
import {
  AboutSkillCard,
  AboutSkillCardContentContainer,
  AboutSkillCardImg,
  AboutSkillCardImageContainer,
  AboutSkillCardTitle,
} from "./skill.element";
import image_test from "../../../assets/about/Logo_Univ.png";

const skill = () => {
    return (
        <>
           <AboutSkillCard>
                      <AboutSkillCardContentContainer>
                        <AboutSkillCardImageContainer>
                          <AboutSkillCardImg
                            src={image_test}
                            alt="vision"
                            loading="Lazy"
                          />
                        </AboutSkillCardImageContainer>
                        <AboutSkillCardTitle>
                          {" "}
                          Universitas Indonesia
                        </AboutSkillCardTitle>
                      </AboutSkillCardContentContainer>
                    </AboutSkillCard>

                    <AboutSkillCard>
                      <AboutSkillCardContentContainer>
                        <AboutSkillCardImageContainer>
                          <AboutSkillCardImg
                            src={image_test}
                            alt="vision"
                            loading="Lazy"
                          />
                        </AboutSkillCardImageContainer>
                        <AboutSkillCardTitle>
                          {" "}
                          Universitas Indonesia
                        </AboutSkillCardTitle>
                      </AboutSkillCardContentContainer>
                    </AboutSkillCard>

                    <AboutSkillCard>
                      <AboutSkillCardContentContainer>
                        <AboutSkillCardImageContainer>
                          <AboutSkillCardImg
                            src={image_test}
                            alt="vision"
                            loading="Lazy"
                          />
                        </AboutSkillCardImageContainer>
                        <AboutSkillCardTitle>
                          {" "}
                          Universitas Indonesia
                        </AboutSkillCardTitle>
                      </AboutSkillCardContentContainer>
                    </AboutSkillCard>

                    <AboutSkillCard>
                      <AboutSkillCardContentContainer>
                        <AboutSkillCardImageContainer>
                          <AboutSkillCardImg
                            src={image_test}
                            alt="vision"
                            loading="Lazy"
                          />
                        </AboutSkillCardImageContainer>
                        <AboutSkillCardTitle>
                          {" "}
                          Universitas Indonesia
                        </AboutSkillCardTitle>
                      </AboutSkillCardContentContainer>
                    </AboutSkillCard> 
        </>
    )
}

export default skill
