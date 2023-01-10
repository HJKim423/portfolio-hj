import styled from "styled-components";
import Skillitem from "./Skillitem";
import realme from "../../assets/img/realme.png";
import colors from "../../assets/color";

const Item = styled.div`
  background-color: white;
  padding: 60px;
  margin: 50px 120px;
  border-radius: 12px;
  color: ${colors.dark};
  width: 35vw;
  margin-left: auto;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.5s;

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

const Project2 = () => {
  return (
    <Item>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        RealMe
        <div className="period">2022.09.24 (해커톤 프로젝트)</div>
      </div>
      <div className="item-img">
        <img src={realme} />
      </div>
      <div className="contents">
        <div className="subscription">
          <div className="introduction">
            오늘 하루 나의 부캐를 기록하고 공유하는 앱
          </div>
          <div className="team">
            ✔️ TEAM : 기획자 1, 디자이너 1, 백엔드 개발자 4, 프론트엔드 개발자 3
          </div>
          <div className="role">
            ✔️ 스플래시 화면, 로그인 화면, 회원가입 화면 구현
          </div>
          <div className="acc">✔️ Ne(o)rdinary 2기 해커톤 2등 수상</div>
          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://github.com/2nd-neordnary-HACKATHON-Team4/realme-frontend">
                Github Repository
              </a>
            </li>
          </ul>
          <div className="skills">
            ✔️ 사용기술
            <div>
              <Skillitem
                title={"React Native"}
                content={
                  "  React Native를 이용해 크로스플랫폼 앱을 개발하였습니다. 개발 진행시 ios와 android의 차이를 이해하며 코드를 작성하는데 집중하였습니다."
                }
              />
              <Skillitem
                title={"JavaScript"}
                content={
                  "  개발 기간이 짧았던 특성상 빠른 코딩과 유연성을 위해 JavaScript 언어를 이용해 개발하였습니다."
                }
              />
              <Skillitem
                title={"Recoil"}
                content={
                  "여러 컴포넌트에 사용되는 state를 분리 통합하여 관리할 수 있게 하고 애플리케이션의 안정성을 높일 수 있으며 Redux에 비해 사용법이 비교적 간단한 Recoil를 이용해 상태관리를 진행하였습니다."
                }
              />
              <Skillitem
                title={"StyleSheet"}
                content={
                  "  React Native의 기본 라이브러리인 StyleSheet를 사용해 스타일을 적용했으며 코드 수정이 용이하다는 장점이 있습니다."
                }
              />
              <Skillitem
                title={"Axios"}
                content={
                  " Http 통신을 위해 Axios를 사용했습니다. Fetch에 없는 response timeout 처리 방법이 존재합니다."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default Project2;
