import styled from "styled-components";
import colors from "../../assets/color";

const Tobbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${colors.dark};
  margin: 0px;
  height: 80px;
  position: fixed;
  z-index: 1;
  margin-right: 40px;

  button {
    font-size: 2vw;
    font-weight: bold;
    margin-right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    letter-spacing: -0.88px;
    padding: 8px 12px;
    color: ${colors.light};
    transition: all 0.2s;
  }

  button:hover {
    color: ${colors.dark};
    background: ${colors.light};
    border-radius: 6px;
    padding: 8px 12px;
    letter-spacing: -0.88px;
  }
`;

const TobBar = () => {
  function goToScroll(name) {
    let location = document.querySelector(name).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  }
  return (
    <Tobbar>
      <button onClick={() => goToScroll("#home")}>home</button>
      <button onClick={() => goToScroll("#projects")}>projects</button>
      <button onClick={() => goToScroll("#about-me")}>about me</button>
    </Tobbar>
  );
};

export default TobBar;
