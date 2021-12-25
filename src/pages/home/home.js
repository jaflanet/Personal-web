import React from "react";
import Portofolio from "../../components/project/project"
import AboutMe from "../../components/aboutMe/aboutMe"
import Intro from "../../components/intro/intro"
import Contact from "../../components/contact/contact"
// import Sponsor from "../../components/home/sponsor/sponsor";

const Home = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <Portofolio />
      <Contact/>
    </>
  );
};

export default Home;
