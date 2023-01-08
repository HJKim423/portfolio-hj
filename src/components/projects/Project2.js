import styled from "styled-components";
import Skillitem from "./Skillitem";
import chalkak from "../../assets/img/chalkak.png";
import colors from "../../assets/color";

const Item = styled.div`
  background-color: white;
  padding: 60px;
  margin: 50px 120px;
  border-radius: 8px;
  color: ${colors.dark};
  width: 45vw;
  margin-left: auto;
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
      width: 45vw;
      border-radius: 8px;
      object-fit: fit;
    }
  }
  .contents {
    .introduction {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .subscription {
      font-size: 18px;
      margin: 0 10px;
      font-weight: 700;

      .team,
      .role,
      .acc {
        margin-right: 100px;
        line-height: 30px;
        margin-bottom: 10px;
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
        <img src={chalkak} />
      </div>
      <div className="contents">
        <div className="subscription">
          <div className="introduction">
            필름카메라 유저들을 위해 필름카메라에 대한 정보, 주변 현상소,
            커뮤니티를 제공하는 앱
          </div>
          <div className="team">
            ✔️ TEAM : 기획자 1, 디자이너 1, 백엔드 개발자 4, 프론트엔드 개발자 3
          </div>
          <div className="role">
            ✔️ 스플래시 화면, 로그인 화면, 회원가입 화면 구현
          </div>
          {/* <div className="acc">✔️ Google Play Store, App Store에 출시 완료</div> */}
          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://www.codingfactory.net/10231">
                Github Repository
              </a>
            </li>
            {/* <li>
              <a href="https://www.codingfactory.net/10231">App Store</a>
            </li> */}
          </ul>
          <div className="skills">
            ✔️ 사용기술
            <div>
              <Skillitem
                title={"React Native"}
                content={
                  "  React Native를 이용해 크로스플랫폼 앱을 개발하였습니다."
                }
              />
              <Skillitem
                title={"JavaScript"}
                content={
                  "  React Native를 이용해 크로스플랫폼 앱을 개발하였습니다."
                }
              />
              <Skillitem
                title={"Recoil"}
                content={"상태관리를 위해 Recoil을 사용하였습니다."}
              />
              <Skillitem
                title={"Styled-Components"}
                content={
                  "  React Native를 이용해 크로스플랫폼 앱을 개발하였습니다."
                }
              />
              <Skillitem
                title={"Axios"}
                content={" Rest API 통신을 위해 Axios를 사용했습니다.."}
              />
            </div>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default Project2;
