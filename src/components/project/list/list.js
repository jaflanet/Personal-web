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
} from "./list.element";
import findmates from "../../../assets/project/findmates.png";
import puzzle from "../../../assets/project/15Puzzle.png";
import ctask from "../../../assets/project/ctask.png";
import masakin from "../../../assets/project/masakin.png";
import sfu from "../../../assets/project/S4U.png";
import sekolah from "../../../assets/project/Sekolahku.png";
import snake from "../../../assets/project/snake.png";
import uifw from "../../../assets/project/uifw.png";

const List = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ProjectListCardContainer>
        <ProjectListCard>
          <ProjectListCardContentContainer>
            <ProjectListCardImageContainer>
              <ProjectListCardTitle> uifashionweek.com </ProjectListCardTitle>
              <ProjectListCardImg src={uifw} alt="vision" loading="Lazy" />
            </ProjectListCardImageContainer>
            <ProjectListCardDesc>
              {" "}
              Online website about Universitas Indonesia event UI Fashion Week
              and registration form for model hunt
            </ProjectListCardDesc>
          </ProjectListCardContentContainer>
        </ProjectListCard>

        <ProjectListCard>
          <ProjectListCardContentContainer>
            <ProjectListCardImageContainer>
              <ProjectListCardTitle> Masak.in </ProjectListCardTitle>
              <ProjectListCardImg src={masakin} alt="vision" loading="Lazy" />
            </ProjectListCardImageContainer>
            <ProjectListCardDesc>
              {" "}
              Flutter base e-commerce prototype app focused in food ordering
              with online database
            </ProjectListCardDesc>
          </ProjectListCardContentContainer>
        </ProjectListCard>

        <ProjectListCard>
          <ProjectListCardContentContainer>
            <ProjectListCardImageContainer>
              <ProjectListCardTitle> Song 4 U </ProjectListCardTitle>
              <ProjectListCardImg src={sfu} alt="vision" loading="Lazy" />
            </ProjectListCardImageContainer>
            <ProjectListCardDesc>
              {" "}
              CRUD {"("} Create, Read, Update, Delete{")"} base web focused on
              personal song list
            </ProjectListCardDesc>
          </ProjectListCardContentContainer>
        </ProjectListCard>

        <ProjectListCard>
          <ProjectListCardContentContainer>
            <ProjectListCardImageContainer>
              <ProjectListCardTitle> Findmates.me </ProjectListCardTitle>
              <ProjectListCardImg src={findmates} alt="vision" loading="Lazy" />
            </ProjectListCardImageContainer>
            <ProjectListCardDesc>
              {" "}
              Findmates.me is a website project made with react.js, node.js,
              html, Css, and postgresql
            </ProjectListCardDesc>
          </ProjectListCardContentContainer>
        </ProjectListCard>

        {show ? (
          <>
            <ProjectListCard>
              <ProjectListCardContentContainer>
                <ProjectListCardImageContainer>
                  <ProjectListCardTitle> Sekolahku </ProjectListCardTitle>
                  <ProjectListCardImg
                    src={sekolah}
                    alt="vision"
                    loading="Lazy"
                  />
                </ProjectListCardImageContainer>
                <ProjectListCardDesc>
                  {" "}
                  Website prototpye for online academy lecture build with HTML
                  and CSS
                </ProjectListCardDesc>
              </ProjectListCardContentContainer>
            </ProjectListCard>

            <ProjectListCard>
              <ProjectListCardContentContainer>
                <ProjectListCardImageContainer>
                  <ProjectListCardTitle> Snake game</ProjectListCardTitle>
                  <ProjectListCardImg src={snake} alt="vision" loading="Lazy" />
                </ProjectListCardImageContainer>
                <ProjectListCardDesc>
                  {" "}
                  Retro snake game build with c programming language
                </ProjectListCardDesc>
              </ProjectListCardContentContainer>
            </ProjectListCard>

            <ProjectListCard>
              <ProjectListCardContentContainer>
                <ProjectListCardImageContainer>
                  <ProjectListCardTitle> 15 puzzle game </ProjectListCardTitle>
                  <ProjectListCardImg
                    src={puzzle}
                    alt="vision"
                    loading="Lazy"
                  />
                </ProjectListCardImageContainer>
                <ProjectListCardDesc>
                  {" "}
                  Old games widget in windows 7 where user can arrange a
                  randomize picture
                </ProjectListCardDesc>
              </ProjectListCardContentContainer>
            </ProjectListCard>

            <ProjectListCard>
              <ProjectListCardContentContainer>
                <ProjectListCardImageContainer>
                  <ProjectListCardTitle>
                    {" "}
                    Simple C program{" "}
                  </ProjectListCardTitle>
                  <ProjectListCardImg src={ctask} alt="vision" loading="Lazy" />
                </ProjectListCardImageContainer>
                <ProjectListCardDesc>
                  {" "}
                  a few progeram made with c programming language
                </ProjectListCardDesc>
              </ProjectListCardContentContainer>
            </ProjectListCard>
            <br />
          </>
        ) : null}
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
