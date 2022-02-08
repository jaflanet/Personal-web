import React, { useState } from "react";
import {
  ProjectListCard,
  ProjectListCardContentContainer,
  ProjectListCardImg,
  ProjectListCardImageContainer,
  ProjectListCardTitle,
  ProjectListCardDesc,
  ShowButton,
  ShowButtonContainer,
  ProjectListCardContainer,
  ProjectLink,
} from "./list.element";
import { projectList } from "./projectList";

const List = () => {
  const [show, setShow] = useState(false);
  const [data] = useState(projectList);
  return (
    <>
      <ProjectListCardContainer>
        {data.map((projectData, index) => (
          <>
            {index < 4 ? (
              <ProjectListCard>
                <ProjectListCardContentContainer>
                  <ProjectListCardImageContainer>
                    <ProjectLink href={projectData.gitLink} target="_blank">
                      <ProjectListCardTitle>
                        {projectData.title}
                      </ProjectListCardTitle>
                    </ProjectLink>
                    <ProjectListCardImg
                      src={projectData.image}
                      alt="vision"
                      loading="Lazy"
                    />
                  </ProjectListCardImageContainer>
                  <ProjectListCardDesc>{projectData.desc}</ProjectListCardDesc>
                </ProjectListCardContentContainer>
              </ProjectListCard>
            ) : null}
            {index > 3 && show ? (
              <ProjectListCard>
                <ProjectListCardContentContainer>
                  <ProjectListCardImageContainer>
                    <ProjectLink href={projectData.gitLink} target="_blank">
                      <ProjectListCardTitle>
                        {projectData.title}
                      </ProjectListCardTitle>
                    </ProjectLink>
                    <ProjectListCardImg
                      src={projectData.image}
                      alt="vision"
                      loading="Lazy"
                    />
                  </ProjectListCardImageContainer>
                  <ProjectListCardDesc>{projectData.desc}</ProjectListCardDesc>
                </ProjectListCardContentContainer>
              </ProjectListCard>
            ) : null}{" "}
          </>
        ))}

        {show ? <></> : null}
      </ProjectListCardContainer>
      <ShowButtonContainer>
        <ShowButton onClick={() => setShow(!show)}>
          {show ? "Show Less" : "View All Project"}
        </ShowButton>
      </ShowButtonContainer>
    </>
  );
};

export default List;
