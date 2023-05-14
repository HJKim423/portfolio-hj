import Skillitem from "./Skillitem";
import wanted from "../../assets/img/wanted.png";
import wanted1 from "../../assets/img/wanted1.png";
import wanted2 from "../../assets/img/wanted2.png";
import wanted3 from "../../assets/img/wanted3.png";
import wanted4 from "../../assets/img/wanted4.png";
import wanted5 from "../../assets/img/wanted5.png";
import wanted6 from "../../assets/img/wanted6.png";

import { Item } from "./Project1";
import Slider from "react-slick";
import { settings, SliderStyle } from "./Project4";

const Project3 = ({ isFade }) => {
  return (
    <Item isFade={isFade}>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        Wanted Clone
        <div className="period">2022.05.21 ~ 2022.06.02</div>
      </div>
      <SliderStyle>
        <Slider {...settings}>
          <div>
            <img src={wanted} alt="wanted" />
          </div>
          <div>
            <img src={wanted1} alt="wanted" />
          </div>
          <div>
            <img src={wanted2} alt="wanted" />
          </div>
          <div>
            <img src={wanted3} alt="wanted" />
          </div>
          <div>
            <img src={wanted4} alt="wanted" />
          </div>
          <div>
            <img src={wanted5} alt="wanted" />
          </div>
          <div>
            <img src={wanted6} alt="wanted" />
          </div>
        </Slider>
      </SliderStyle>

      <div className="contents">
        <div className="subscription">
          <div className="introduction">원티드 웹사이트 클론 코딩</div>
          <div className="team">✔️ 백엔드 개발자 1, 프론트엔드 개발자 1</div>
          <div className="role">
            ✔️ 서비스 내 구현 기능
            <li>
              12페이지 구현, 자동 로그인, 로그아웃, 이력서 작성 기능, 좋아요
              기능 구현
            </li>
          </div>

          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://github.com/mock-rp5/wanted_web_jay">
                Github Repository
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1tSMbhpdstEpcXeb2a3AIYNhED7R9sapm/view?usp=share_link">
                구현 영상
              </a>
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
