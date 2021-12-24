import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/navbar/logo-black.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // MobileIcon,
  NavMenu,
  NavItem,
  NavItem2,
  NavLinks,
  NavLinks2,
  NavImg,
  // NavLogoScroll,
  NavLinksScroll,
} from "./navbar.elements";
// import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname === "/");
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavImg src={logo} alt="bye" />
            </NavLogo>
            <NavMenu click={click}>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Me
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    About Me
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Project
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    Project
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Blog
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    Blog
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    Contact
                  </NavLinksScroll>
                )}
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
