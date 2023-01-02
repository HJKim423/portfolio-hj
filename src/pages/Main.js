import { useEffect, useState } from "react";
import styled from "styled-components";
import TobBar from "../components/Home/TobBar";
import bgImg from "../assets/img/bg.jpg";
import Project1 from "../components/projects/Project1";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImg});
  background-size: cover;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  height: 700px;
  color: #ffffff;
`;

const Section = styled.div`
  padding-top: 50px;
  padding-left: 70px;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
`;

const Main = () => {
  return (
    <main style={{ margin: "-8px" }}>
      <section id="home">
        <Background>
          <TobBar />
          <Text>안녕하세요. 김호정입니다.</Text>
        </Background>
      </section>
      <section id="projects">
        <Section>
          <Title>projects</Title>
          <Project1 />
          <Project1 />
        </Section>
      </section>
      <section id="about-me">
        <Section>
          <Title>about me</Title>
        </Section>
      </section>
    </main>
  );
};

export default Main;
