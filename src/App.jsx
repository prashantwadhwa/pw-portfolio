import { createContext, useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Utiles/Theme";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import ProjectDetail from "./Component/ProjectDetail";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education/>
              <Contact/>
            </Wrapper>
            <Footer/>

            {openModal.state && (
              <ProjectDetail
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </Body>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
