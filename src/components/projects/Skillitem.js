import { useState } from "react";
import styled from "styled-components";

const SkillItemStyle = styled.div`
  margin: 10px;
  font-size: 18px;

  .skill-name {
    padding: 10px;
    cursor: pointer;
    width: 200px;
  }
  .skill-name:hover {
    text-decoration: underline;
  }
  .skill-content {
    font-weight: 500;
    padding-left: 15px;
  }
`;
const Skillitem = ({ title, content }) => {
  const [isHide, setIsHide] = useState(true);
  return (
    <SkillItemStyle>
      <div className="skill-name" onClick={() => setIsHide(!isHide)}>
        {title}
      </div>
      {!isHide && <div className="skill-content">{content}</div>}
    </SkillItemStyle>
  );
};

export default Skillitem;
