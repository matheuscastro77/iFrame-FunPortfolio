import React, { useRef } from "react";
import {
  Main,
  Nav,
  Button
} from "./styled";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";
import Start from "../../components/Start/Start";
import { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";

const Home = () => {
  const { menu, setMenu } = useContext(GlobalStateContext);

  const ScrollHome = useRef(null);
  const ScrollAbout = useRef(null);
  const ScrollAbility = useRef(null);
  const ScrollProject = useRef(null);
  const ScrollContact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <Main>
      <Nav>
        <div>
          <h1>Matheus Castro</h1>
          <container>
            <Button onClick={() => scrollToSection(ScrollHome)}> Home </Button>
            <Button onClick={() => scrollToSection(ScrollAbout)}> About </Button>
            <Button onClick={() => scrollToSection(ScrollAbility)}> Skills </Button>
            <Button onClick={() => scrollToSection(ScrollProject)}> Projects </Button>
            <Button onClick={() => scrollToSection(ScrollContact)}> Contact </Button>
          </container>
        </div>
      </Nav>
      <div ref={ScrollHome}>
        <Start />
      </div>

      <div ref={ScrollAbout}>
        {" "}
        <About />{" "}
      </div>
      <div ref={ScrollAbility}>
        {" "}
        <Skills />{" "}
      </div>
      <div ref={ScrollProject}>
        {" "}
        <Project />{" "}
      </div>
      <div ref={ScrollContact}>
        {" "}
        <Contact />{" "}
      </div>
    </Main>
  );
};

export default Home;
