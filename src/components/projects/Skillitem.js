import { useState } from "react";
import styled from "styled-components";

const SkillItemStyle = styled.div`
  margin: 10px;
  font-size: 18px;
  background-color: lightgray;
  border-radius: 12px;
  transition: all 0.2s;

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }

  .skill-name {
    padding: 10px;
    cursor: pointer;
    width: 200px;
  }

  .skill-content {
    font-weight: 500;
    padding: 0 15px;
    font-size: 14px;
    padding-bottom: 12px;
  }
`;
const Skillitem = ({ title, content }) => {
  const [isHide, setIsHide] = useState(true);
  return (
    <SkillItemStyle onClick={() => setIsHide(!isHide)}>
      <div className="skill-name">{title}</div>
      {!isHide && <div className="skill-content">{content}</div>}
    </SkillItemStyle>
  );
};

export default Skillitem;
