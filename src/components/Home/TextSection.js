import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../assets/color";
import arrow from "../../assets/img/arrow.png";

const TextSecionStyle = styled.div`
  a {
    text-decoration: none;
    color: ${colors.dark};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .scroll-container {
    width: 1200px;
    margin: 0 auto;
    overflow-x: scroll;
    overflow-y: hidden;
    cursor: pointer;
  }
  .scroll-container::-webkit-scrollbar {
    display: none;
  }

  .scroll-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 2400px;
    transform: translateX(-${props => props.xOffset}px);
    transition: all 0.35s ease-in-out;
  }

  .arrow {
    width: 200px;
    margin: 0 auto;
    display: flex;
    margin-top: -50px;
  }
  .back {
    transform: rotate(180deg);
  }

  .front-section {
    margin-top: 50px;
  }
  .front-text {
    font-size: 200px;
    font-weight: 700;
    color: ${colors.dark};
    text-align: center;
    width: 100%;
  }

  .back-section {
    width: 100%;
    font-size: 50px;
    text-align: center;
    font-weight: 700;
    color: ${colors.dark};
    margin-top: 100px;

    .back-text {
      margin: 10px 0;
      span {
        z-index: 1;
      }
    }

    span {
      position: relative;
      font-weight: bold;
    }
    span::after {
      content: "";
      display: block;
      width: 0;
      height: 15px;
      position: absolute;
      left: 0;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.2);
    }
    div:hover span::after {
      width: 100%;
      transition: width 0.5s;
    }
  }
`;

const TextSection = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [xOffset, setXOffset] = useState(0);

  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    // setStartX(e.pageX + xOffset);
    setStartX(e.pageX);
  };

  const onDragEnd = e => {
    setEndX(e.pageX);
    setIsDrag(false);
  };

  const onDragMove = e => {
    if (isDrag) {
      setXOffset(startX - e.pageX);
      console.log(startX - endX);
    }
  };

  useEffect(() => {
    if (startX > endX) {
      setXOffset(1200);
    } else if (startX < endX) {
      setXOffset(0);
    }
  }, [xOffset]);

  return (
    <TextSecionStyle xOffset={xOffset}>
      <div className="scroll-container">
        <div
          className="scroll-section"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          <div className="front-section">
            <div className="front-text">FRONTEND DEVELOPER</div>
            <img
              className="arrow"
              src={arrow}
              onClick={() => setXOffset(1200)}
            />
          </div>

          <div className="back-section">
            <div className="back-text">
              <span>
                <a href="https://github.com/HJKim423" target="_blank">
                  Github.
                </a>
              </span>
            </div>
            <div className="back-text">
              <span>
                <a href="https://velog.io/@pknojlh27" target="_blank">
                  Velog.
                </a>
              </span>
            </div>
            <div className="back-text">
              <span>pknojlh27@naver.com</span>
            </div>
            <img
              className="arrow back"
              src={arrow}
              onClick={() => setXOffset(0)}
            />
          </div>
        </div>
      </div>
    </TextSecionStyle>
  );
};

export default TextSection;
