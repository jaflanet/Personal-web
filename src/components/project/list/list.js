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
              <ProjectLink
                href="https://github.com/jaflanet/uifashionweek"
                target="_blank"
              >
                <ProjectListCardTitle> uifashionweek.com </ProjectListCardTitle>
              </ProjectLink>
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
              <ProjectLink
                href="https://github.com/jaflanet/masakin_app"
                target="_blank"
              >
                <ProjectListCardTitle> Masak.in </ProjectListCardTitle>
              </ProjectLink>
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
              <ProjectLink
                href="https://github.com/jaflanet/CRUD-Project"
                target="_blank"
              >
                <ProjectListCardTitle> Song 4 U </ProjectListCardTitle>
              </ProjectLink>
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
              <ProjectLink
                href="https://github.com/jaflanet/Proyek_uas_sbd_kelompok2A"
                target="_blank"
              >
                <ProjectListCardTitle> Findmates.me </ProjectListCardTitle>
              </ProjectLink>
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
                  <ProjectLink
                    href="https://github.com/jaflanet/prototype-sekolahku"
                    target="_blank"
                  >
                    <ProjectListCardTitle> Sekolahku </ProjectListCardTitle>
                  </ProjectLink>
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
                  <ProjectLink
                    href="https://github.com/jaflanet/snake-game"
                    target="_blank"
                  >
                    <ProjectListCardTitle> Snake game</ProjectListCardTitle>
                  </ProjectLink>
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
                  <ProjectLink
                    href="https://github.com/jaflanet/15-Puzzle-Game---Proglan-UTS"
                    target="_blank"
                  >
                    <ProjectListCardTitle>
                      {" "}
                      15 puzzle game{" "}
                    </ProjectListCardTitle>
                  </ProjectLink>
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
                  <ProjectLink
                    href="https://github.com/jaflanet/C-Task"
                    target="_blank"
                  >
                    <ProjectListCardTitle>
                      Simple C program
                    </ProjectListCardTitle>
                  </ProjectLink>
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
