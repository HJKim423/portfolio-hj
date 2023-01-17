import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import TobBar from "../components/Home/TobBar";
import Project1 from "../components/projects/Project1";
import colors from "../assets/color.js";
import Project2 from "../components/projects/Project2";
import Education from "../components/aboutme/Education";
import Experience from "../components/aboutme/Experience";
import Project3 from "../components/projects/Project3";
import bgImg from "../assets/img/back.jpg";

const Main = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [isFade1, setIsFade1] = useState(false);
  const [isFade2, setIsFade2] = useState(false);
  const [isFade3, setIsFade3] = useState(false);

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
    if (yOffset < 1300) {
      setIsFade1(false);
      setIsFade2(false);
      setIsFade3(false);
    }

    console.log(yOffset, isFade1);
  }, [yOffset]);

  const handleScroll = () => {
    setYOffset(window.scrollY);
    // scrollLoop();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainStyle scroll={yOffset}>
      <TobBar />
      <section id="home">
        <Background style={{ backgroundPositionY: yOffset / 2 }}>
          <Text>FRONTEND DEVELOPER</Text>
        </Background>
      </section>
      <section id="projects">
        <Section>
          <section className="scroll-section" id="scroll-section-1">
            <Title>projects</Title>
            <ProjectDisplay isFade={isFade1}>
              <Project1 isFade={isFade1} />
              <Project2 isFade={isFade2} />
              <Project3 isFade={isFade3} />
            </ProjectDisplay>
          </section>
        </Section>
      </section>
      <section id="about-me">
        <Section>
          <section className="scroll-section" id="scroll-section-2">
            <Title>about me</Title>
            <Education yOffset={yOffset} />
            <Experience yOffset={yOffset} />
          </section>
        </Section>
      </section>
    </MainStyle>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

const slideUp = keyframes`
  from{
    transform: translateY(200px);
  }
  to{
    transform: translateY(0px);
  }
`;

const MainStyle = styled.div`
  margin: -8px;
  background-color: ${colors.light};
  overflow-x: hidden;

  h1 {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 200vh;
  // background-color: ${colors.dark};
  background-image: url(${bgImg});
  background-size: cover;

  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  font-weight: 700;
  height: 3em;
  color: ${colors.dark};
  text-align: center;
  padding-top: 180px;
`;

const Section = styled.div`
  padding-top: 50px;
  padding-left: 120px;
`;

const Title = styled.div`
  font-size: 150px;
  font-weight: 700;
  margin-bottom: 40px;
`;
const ProjectDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
