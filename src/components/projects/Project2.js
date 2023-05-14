import Skillitem from "./Skillitem";
import realme from "../../assets/img/realme.png";
import { Item } from "./Project1";

const Project2 = ({ isFade }) => {
  return (
    <Item isFade={isFade}>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        RealMe
        <div className="period">2022.09.24 (해커톤 프로젝트)</div>
      </div>
      <div className="item-img">
        <img src={realme} alt="realme" />
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
            ✔️ 서비스 내 구현 기능
            <li>스플래시 화면, 로그인 화면, 회원가입 화면 구현</li>
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
