import styled from "styled-components";

const Tobbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: transparent;
  margin: 0px;
  height: 100px;
  position: fix;
  z-index: 1;
  margin-right: 40px;

  button {
    font-size: 28px;
    font-weight: bold;
    margin-right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    letter-spacing: -0.88px;
    padding: 8px 12px;
  }

  button:hover {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    padding: 8px 12px;
    letter-spacing: -0.88px;
  }
`;

const TobBar = () => {
  return (
    <Tobbar>
      <button>home</button>
      <button>projects</button>
      <button>about me</button>
    </Tobbar>
  );
};

export default TobBar;