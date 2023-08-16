import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import gitLogo from "../assets/github-logo.png";
import ytLogo from "../assets/yt-logo.png";
import logo from '../assets/circle logo.png'
// import { MdLightMode } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { useTheme } from "./ThemeContext";
// import { darkTheme } from "../Utiles/Theme";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
  color:white;
`;

const MobileLogo = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  /* border: 1.8px solid ${({ theme }) => theme.primary}; */
  display: flex;
  align-items: center;
  /* border-radius: 7px; */
  /* color: ${({ theme }) => theme.primary}; */
  filter: grayscale();
  background: transparent;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  margin-right:-19px;
  transition: all 0.6s ease-in-out;

  :hover {
    /* background: ${({ theme }) => theme.primary}; */
    /* color: ${({ theme }) => theme.white}; */
    filter: drop-shadow(0 0 10px rgb(170, 14, 100));
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const YTButton = styled.a`
  /* border: 1.8px solid ${({ theme }) => theme.primary}; */
  display: flex;
  align-items: center;
  /* border-radius: 7px; */
  /* color: ${({ theme }) => theme.primary}; */
  filter: grayscale();
  background: transparent;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.6s ease-in-out;

  :hover {
    /* background: ${({ theme }) => theme.primary}; */
    /* color: ${({ theme }) => theme.white}; */
    filter: grayscale() drop-shadow(0 0 10px rgb(170, 14, 100));
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <img src={logo} style={{width:"35px", height:"35px"}}/> <Span> <pre>  Portfolio</pre> </Span>
        </NavLogo>
        <MobileLogo onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton
            href="https://github.com/prashantwadhwa"
            target="_blank"
          >
            <img
              src={gitLogo}
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
            {/* Github */}
          </GitHubButton>

          <YTButton
            href="https://youtube.com/prashantwadhwa"
            target="_blank"
          >
            <img
              src={ytLogo}
              alt="yt_logo"
              style={{ height: "35px", width: "35px" }}
            />
            {/* YouTube */}
          </YTButton>
        </ButtonContainer>
        <MobileMenu open={open}>
          <MobileLink href="#about" onClick={() => setOpen(!open)}>
            About
          </MobileLink>
          <MobileLink href="#skills" onClick={() => setOpen(!open)}>
            Skills
          </MobileLink>
          <MobileLink href="#experience" onClick={() => setOpen(!open)}>
            Experience
          </MobileLink>
          <MobileLink href="#projects" onClick={() => setOpen(!open)}>
            Projects
          </MobileLink>
          <MobileLink href="#education" onClick={() => setOpen(!open)}>
            Education
          </MobileLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
