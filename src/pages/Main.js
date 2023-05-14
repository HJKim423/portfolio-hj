import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TobBar from "../components/Home/TobBar";
import Project1 from "../components/projects/Project1";
import colors from "../assets/color.js";
import Project2 from "../components/projects/Project2";
import Education from "../components/aboutme/Education";
import Experience from "../components/aboutme/Experience";
import Project3 from "../components/projects/Project3";
import bgImg from "../assets/img/back.jpg";
import TextSection from "../components/Home/TextSection";
import Project4 from "../components/projects/Project4";
import Project5 from "../components/projects/Project5";

const Main = () => {
  const [yOffset, setYOffset] = useState(0);
  const [isFade1, setIsFade1] = useState(false);
  const [isFade2, setIsFade2] = useState(false);
  const [isFade3, setIsFade3] = useState(false);
  const [isFade4, setIsFade4] = useState(false);
  const [isFade5, setIsFade5] = useState(false);
  const mainRef = useRef();
  const [totalHeight, setTotalHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setTotalHeight(mainRef.current.clientHeight);
  }, []);

  useEffect(() => {
    if (yOffset > 1300) {
      setIsFade1(true);
    }
    if (yOffset > 2700) {
      setIsFade2(true);
    }
    if (yOffset > 4000) {
      setIsFade3(true);
    }
    if (yOffset > 5400) {
      setIsFade4(true);
    }
    if (yOffset > 6700) {
      setIsFade5(true);
    }
    if (yOffset < 1300) {
      setIsFade1(false);
      setIsFade2(false);
      setIsFade3(false);
      setIsFade4(false);
      setIsFade5(false);
    }

    // onDragMove();
  }, [yOffset]);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setYOffset(window.scrollY);
  };

  const onDragMove = e => {
    setMouseX(e.clientX);
    setMouseY(e.clientY + yOffset);
  };

  return (
    <MainStyle
      scroll={yOffset}
      ref={mainRef}
      mouseX={mouseX}
      mouseY={mouseY}
      onMouseMove={onDragMove}
    >
      <div className="cursor"></div>
      <TobBar />
      <section id="home">
        <Background style={{ backgroundPositionY: yOffset / 2 }}>
          <TextSection />
        </Background>
      </section>
      <section id="projects">
        <Section>
          <section className="scroll-section" id="scroll-section-1">
            <Title>projects</Title>
            <ProjectDisplay isFade={isFade1}>
              <Project4 isFade={isFade1} />
              <Project5 isFade={isFade2} />
              <Project1 isFade={isFade3} />
              <Project2 isFade={isFade4} />
              <Project3 isFade={isFade5} />
            </ProjectDisplay>
          </section>
        </Section>
      </section>
      <section id="about-me">
        <Section>
          <section className="scroll-section" id="scroll-section-2">
            <Title>about me</Title>
            <Education yOffset={yOffset} totalHeight={totalHeight} />
            <Experience yOffset={yOffset} totalHeight={totalHeight} />
          </section>
        </Section>
      </section>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  margin: -0.5rem;
  background-color: ${colors.light};
  overflow-x: hidden;
  padding-bottom: 250px;

  .cursor {
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    z-index: 10;
    position: absolute;
    top: ${props => props.mouseY - 20}px;
    left: ${props => props.mouseX - 20}px;
    pointer-events: none;
    transition: transform 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    .cursor {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 200vh;
  background-image: url(${bgImg});
  background-size: cover;
  }
`;

const Section = styled.div`
  // padding-top: 50px;
  // padding-left: 120px;
  padding: 50px 10vw;
`;

const Title = styled.div`
  font-size: 8vw;
  font-weight: 700;
  margin-bottom: 40px;
`;
const ProjectDisplay = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-child(even) {
    margin-left: 30vw;
    @media screen and (max-width: 1020px) {
      margin: 50px auto;
    }
  }
`;

export default Main;
