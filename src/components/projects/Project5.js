import Skillitem from "./Skillitem";
import ppp1 from "../../assets/img/ppp1.png";
import ppp2 from "../../assets/img/ppp2.png";
import ppp3 from "../../assets/img/ppp3.png";
import ppp4 from "../../assets/img/ppp4.png";
import ppp5 from "../../assets/img/ppp5.png";
import ppp6 from "../../assets/img/ppp6.png";
import { Item } from "./Project1";
import { settings, SliderStyle } from "./Project4";
import Slider from "react-slick";

const Project5 = ({ isFade }) => {
  return (
    <Item isFade={isFade} style={{}}>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        PPPick
        <div className="period">2023.01 ~ 2023.02</div>
      </div>
      <SliderStyle>
        <Slider {...settings}>
          <div>
            <img src={ppp1} alt="ppp" />
          </div>
          <div>
            <img src={ppp2} alt="ppp" />
          </div>
          <div>
            <img src={ppp3} alt="ppp" />
          </div>
          <div>
            <img src={ppp4} alt="ppp" />
          </div>
          <div>
            <img src={ppp5} alt="ppp" />
          </div>
          <div>
            <img src={ppp6} alt="ppp" />
          </div>
        </Slider>
      </SliderStyle>

      <div className="contents">
        <div className="subscription">
          <div className="introduction">
            PersonalPicturePick의 약자로, 회원이 작가의 포트폴리오를 확인 후,
            작가를 선택(PICK)하여 개인 맞춤형 디자인을 제작 의뢰하는 서비스
          </div>
          <div className="team">
            ✔️ TEAM : 백엔드 개발자 3, 프론트엔드 개발자 2
          </div>
          <ul className="role">
            ✔️ 서비스 페이지 구현 기능
            <li>
              네이버,카카오,구글 로그인/ 회원별 게시글 좋아요 기능/포트폴리오
              게시글 : 다중 이미지 파일,태그 업로드 조회 삭제 기능
            </li>
          </ul>
          <div className="role">
            ✔️ 관리자 페이지 구현 기능
            <li>
              로그인 / 페이지네이션 및 검색 필터링 기능 / 회원정보, 상품정보,
              포트폴리오 정보 조회 및 삭제 기능
            </li>
          </div>
          <div className="acc">✔️AWS배포 완료</div>
          <ul className="links">
            ✔️ 관련 링크
            <li>
              <a href="https://github.com/pickpickpick-project">
                Github Repository
              </a>
            </li>
            <li>
              <a href="https://www.pppick.store/">
                서비스 배포 주소 https://www.pppick.store
              </a>
            </li>
            <li>
              <a href="https://www.pppick.store/admin/login">
                관리자페이지 배포 주소 https://www.pppick.store/admin/login
              </a>
              <h5>관리자 계정 - ID : admin / Password : admin</h5>
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

export default Project5;
