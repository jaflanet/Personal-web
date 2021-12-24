import styled from "styled-components";

export const MainApp = styled.div`
  height: 100vh;
`;

export const MainSection = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: lightsalmon;
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; //for firefox
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
  }
`;
