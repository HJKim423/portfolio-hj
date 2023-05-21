import Skillitem from "./Skillitem";
import spacetailor from "../../assets/img/spacetailor.jpg";
import spacetailor2 from "../../assets/img/spacetailor2.png";

import admin3 from "../../assets/img/admin.png";
import admin1 from "../../assets/img/admin1.png";
import admin2 from "../../assets/img/admin2.png";
import { Item } from "./Project1";
import Slider from "react-slick";
import styled from "styled-components";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

export const SliderStyle = styled.div`
@media screen and (max-width: 1020px) {
  width: 55vw;
}
@media screen and (max-width: 768px) {
  width: 400px;
}
  width: 575px;
  display: flex;

  height: 400px;
  overflow: hidden;
  padding: 20px 0px 40px 0;
  transition: all 0.2s;
  position: relative;



  :hover {
    transform: scale(1.01);
  }

  div {
    width: 575px;
    display: flex;
    // height: 400px;
    height: 100%;

  }

  img {
    width: 575px;
    height: 400px;
    object-fit: fit;
    border-radius: 8px;
   
  }
  .slick-arrow {
    width: 30px;
    height: 30px;
    background: red;
    z-index: 2;
    position:absolute;
    top: 45%;
  }

  button {
    border: none;
    padding: 0;
  }

  .slick-next {
    right: 0px;
  }


  .slick-next:before {
    display: none;
  }
  .slick-prev:before {
    display: none;
  }


  .slick-dots {
    position: absolute;
    margin: 0 auto;
    bottom: 0px;
    z-index: 100;
    color:red;
    padding-left: 0;
    list-style: none;
    left: 50%;
    transform: translateX(-50%);


    li {
      width: 20px;
      height: 40px;
      padding: 0;
   
      float:left;
    }
    li button {
      padding: 0px;
      width: 8px;
      height: 8px;
      // display:none;
      border-radius: 50%;
      background-color: gray;
      color:gray;
      font-size:1px;
      cursor:pointer;
      opacity: 0.4;
    }

    li > button:before {
      width: 10px;
      height: 10px;
      font-size: 1px;
      color: black;
      opacity: 1;
      padding: 0;
      margin: 0;
    }
    .slick-active > button {
      color: gray;
      background-color: gray;
      opacity: 0.9;
    }
  }
}
`;

const Project4 = ({ isFade }) => {
  return (
    <Item isFade={isFade}>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        Space Tailor
        <div className="period">2023.02 ~ 2023.5 (외주 프로젝트)</div>
      </div>
      <SliderStyle>
        <Slider {...settings}>
          <div>
            <img src={spacetailor} alt="spacetailor" />
          </div>
          <div>
            <img src={spacetailor2} alt="spacetailor" />
          </div>
          <div>
            <img src={admin1} alt="spacetailor" />
          </div>
          <div>
            <img src={admin2} alt="spacetailor" />
          </div>
          <div>
            <img src={admin3} alt="spacetailor" />
          </div>
        </Slider>
      </SliderStyle>

      <div className="contents">
        <div className="subscription">
          <div className="introduction">
            내 공간에 직접 벽지를 맵핑해보는 앱
          </div>
          <div className="team">
            ✔️ 기획자 1, 디자이너 1, 백엔드 개발자 1, 프론트엔드 개발자 2
          </div>
          <ul className="role">
            ✔️ 하이브리드 앱 구현 기능
            <li>
              로그인, 회원가입, 비밀번호 찾기, 이메일 인증, 카메라, 갤러리 연결,
              마이페이지 회원정보 조회 및 수정, 로그아웃, 회원탈퇴 기능, safari
              이미지 저장 및 공유 기능, i18next번역 기능/ 카카오 알림톡
              인증(현재 기능 삭제), 카카오 주소 api(현재 기능 삭제)
            </li>
          </ul>
          <ul className="role">
            ✔️ 관리자 페이지(웹) 구현 기능
            <li>
              페이지네이션, 회원정보 수정, 벽지, 배너 추가,삭제,수정 기능, cvs
              다운로드 기능
            </li>
          </ul>
          <div className="acc">✔️ Google Play Store, App Store에 출시 완료</div>
          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://play.google.com/store/search?q=%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%20%ED%85%8C%EC%9D%BC%EB%9F%AC&c=apps&hl=ko&gl=KR">
                Google Play Store
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
                title={"Styled-Components"}
                content={
                  "반복되는 컴포넌트들에 코드 중복을 최소화하기 위해 Styled-Component를 사용하여 빠르게 작업하였습니다."
                }
              />
              <Skillitem
                title={"Axios"}
                content={
                  " Http 통신을 위해 Axios를 사용했습니다. Fetch에 없는 response timeout 처리 방법이 존재합니다."
                }
              />
              <Skillitem
                title={"React-Query"}
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

export default Project4;
