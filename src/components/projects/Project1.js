import Skillitem from "./Skillitem";
import chalkak from "../../assets/img/chalkak.png";
import colors from "../../assets/color";
import styled, { keyframes, css } from "styled-components";

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

const Project1 = ({ isFade }) => {
  return (
    <Item isFade={isFade}>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        Chalkak
        <div className="period">2022.09 ~ 2022.11</div>
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
            ✔️ 기획자 1, 디자이너 1, 백엔드 개발자 1, 프론트엔드 개발자 2
          </div>
          <div className="role">
            ✔️ 카카오 로그인, 가입 화면,앱 접근, 홈 화면, 커뮤니티 화면(글 작성,
            수정, 삭제, 댓글 작성, 수정, 삭제, 키워드 검색, 신고 기능)구현,
            Google Play Store 배포
          </div>
          <div className="acc">✔️ Google Play Store, App Store에 출시 완료</div>
          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://github.com/Feelim/feelim-web">
                Github Repository
              </a>
            </li>
            <li>
              <a href="https://www.codingfactory.net/10231">App Store</a>
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
                title={"TypeScript"}
                content={
                  "  원활한 코드 공유를 위해 가독성이 좋고 타입 안정성이 높은 TypeScript 언어를 이용해 개발하였습니다."
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

export default Project1;
