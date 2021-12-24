import React from "react";
import Portofolio from "../../components/project/project"
import AboutMe from "../../components/aboutMe/aboutMe"
import Intro from "../../components/intro/intro"
// import Sponsor from "../../components/home/sponsor/sponsor";

const Home = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Portofolio />
    </>
  );
};

export default Home;
