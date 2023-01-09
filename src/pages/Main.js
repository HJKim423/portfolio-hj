import { useEffect, useState } from "react";
import styled from "styled-components";
import TobBar from "../components/Home/TobBar";
import Project1 from "../components/projects/Project1";
import colors from "../assets/color.js";
import Project2 from "../components/projects/Project2";
import Education from "../components/aboutme/Education";
import Experience from "../components/aboutme/Experience";

const MainStyle = styled.div`
  margin: -8px;
  background-color: ${colors.light};

  #home {
    display: flex;
  }
`;

const Contact = styled.div`
  display: flex;

  .drag-box {
    width: 40px;
    height: 100%;
    background-color: red;
    float: right;
  }
`;
const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.dark};
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  font-weight: 700;
  height: 700px;
  color: ${colors.light};
  text-align: center;
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

const Main = () => {
  return (
    <MainStyle>
      <TobBar />
      <section id="home">
        <Contact>
          <div className="contact-contents">email/ git / velog</div>
          <div className="drag-box">drag</div>
        </Contact>
        <Background>
          <Text>FRONTEND DEVELOPER</Text>
        </Background>
      </section>
      <section id="projects">
        <Section>
          <Title>projects</Title>
          <ProjectDisplay>
            <Project1 />
            <Project2 />
            <Project1 />
          </ProjectDisplay>
        </Section>
      </section>
      <section id="about-me">
        <Section>
          <Title>about me</Title>
          <Education />
          <Experience />
        </Section>
      </section>
    </MainStyle>
  );
};

export default Main;
