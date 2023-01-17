import styled, { keyframes, css } from "styled-components";
import Skillitem from "./Skillitem";
import wanted from "../../assets/img/wanted.png";
import colors from "../../assets/color";

const slideUp = keyframes`
from{
  transform: translateY(200px);
  opacity: 0
}
to{
  transform: translateY(0px);
  opacity: 1
}
`;

const Item = styled.div`
  background-color: white;
  padding: 60px;
  margin: 50px 20px;
  border-radius: 12px;
  color: ${colors.dark};
  width: 35vw;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.2s;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  ${props =>
    props.isFade &&
    css`
      animation-name: ${slideUp};
    `}


  :hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .sub {
    color: gray;
    font-size: 25px;
    font-weight: 700;
  }
  .title {
    font-size: 40px;
    font-weight: 700;
    margin: 10px 0;
    display: flex;
    align-items: flex-end;

    .period {
      font-size: 18px;
      margin-left: 15px;
      margin-bottom: 6px;
      font-weight: 500;
    }
  }
  .item-img {
    margin: 15px 0;
    img {
      width: 35vw;
      border-radius: 8px;
      object-fit: fit;
    }
  }
  .contents {
    .introduction {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .subscription {
      font-size: 16px;
      margin: 0 10px;
      font-weight: 700;

      .team,
      .role,
      .acc {
        margin-right: 20px;
        line-height: 30px;
        margin-bottom: 5px;
      }

      .links {
        padding-left: 0;

        li {
          list-style: none;
          margin: 5px 0 5px 30px;
          margin-bottom: 10px;

          a {
            font-weight: 700;
            padding: 5px;
            color: ${colors.dark};
           
            text-decoration: none;
          }
          a:hover {
            background-color: ${colors.light};
            color: ${colors.dark}
            padding: 2px 5px;
            font-weight: 700;
            border-radius: 6px;
          }
        }
      }
    }
  }

  .skills {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Project3 = ({ isFade }) => {
  return (
    <Item isFade={isFade}>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        Wanted Clone
        <div className="period">2022.05.21 ~ 2022.06.02</div>
      </div>
      <div className="item-img">
        <img src={wanted} />
      </div>
      <div className="contents">
        <div className="subscription">
          <div className="introduction">원티드 웹사이트 클론 코딩</div>
          <div className="team">✔️ 백엔드 개발자 1, 프론트엔드 개발자 1</div>
          <div className="role">
            ✔️ 12페이지 구현, 자동 로그인, 로그아웃, 이력서 작성 기능 구현
          </div>
          {/* <div className="acc">✔️ Google Play Store, App Store에 출시 완료</div> */}
          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://github.com/mock-rp5/wanted_web_jay">
                Github Repository
              </a>
            </li>
            <li>
              <a href="https://github.com/mock-rp5/wanted_web_jay">구현 영상</a>
            </li>
          </ul>
          <div className="skills">
            ✔️ 사용기술
            <div>
              <Skillitem
                title={"React"}
                content={
                  "  React 라이브러리를 기반으로 개발하였습니다. 컴포넌트를 이용해 재사용이 가능하도록 개발을 진행하였습니다."
                }
              />
              <Skillitem
                title={"JavaScript"}
                content={
                  "  개발 기간이 짧았던 특성상 빠른 코딩과 유연성을 위해 JavaScript 언어를 이용해 개발하였습니다."
                }
              />
              <Skillitem
                title={"Redux"}
                content={
                  "여러 컴포넌트에 사용되는 state를 분리 통합하여 관리할 수 있게 하고 애플리케이션의 안정성을 높일 수 있는 Redux를 이용해 상태관리를 진행하였습니다."
                }
              />
              <Skillitem
                title={"Styled-Components"}
                content={
                  "  비교적 간단한 기능 위주로 구현하였기 때문에 CSS-in-JS 방식인 Styled-Components를 사용해 개발하였습니다."
                }
              />
              <Skillitem
                title={"Fetch"}
                content={
                  " Http 통신을 위해 JavaScript 내장 라이브러리인 Fetch를 사용했습니다."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default Project3;
