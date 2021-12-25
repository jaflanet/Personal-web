import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Navbar,Footer} from "./components";
// import Home from "./pages/home/home";
// import NotFound from "./pages/notFound/notFound.js";
// import Register from "./pages/register/register.js";
import Home from "./pages/home/home";
import ScrollToTop from "./components/scrollToTop";
import Portofolio from "./components/project/project"
import AboutMe from "./components/aboutMe/aboutMe"
// import Intro from "./components/intro/intro"
import "./App.css"
// import { useState } from "react";
// import {
//   MainApp,
//   MainSection,
// } from "./App.element";
// import Menu from "./components/menu/Menu";

function App() {
  return (
    <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portofolio" component={Portofolio } />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
