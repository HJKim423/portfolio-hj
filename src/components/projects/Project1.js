import styled from "styled-components";
import Skillitem from "./Skillitem";

const Item = styled.div`
  background-color: lightblue;
  padding: 50px;
  margin: 50px 20px;

  .sub {
    color: gray;
    font-size: 20px;
    font-weight: 500;
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
    display: flex;
    align-items: flex-end;

    .period {
      font-size: 16px;
      margin-left: 15px;
      margin-bottom: 4px;
      font-weight: 500;
    }
  }
  .contents {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    margin-bottom: 20px;

    .item-img {
      background-color: gray;
      width: 600px;
      height: 400px;
      border-radius: 8px;
    }
    .subscription {
      font-size: 18px;
      margin: 0 10px;
      padding: 0 30px;
      font-weight: 700;

      .introduction {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        margin-right: 80px;
        line-height: 40px;
      }
      .team {
        margin-bottom: 10px;
      }
      .role {
        margin-right: 100px;
        line-height: 30px;
        margin-bottom: 20px;
      }
      .links {
        padding-left: 0;

        li {
          list-style: none;
          margin: 5px 0 5px 30px;

          a {
            color: black;
            font-weight: 400;
            padding: 5px;
          }
          a:hover {
            background-color: lightgray;
            padding: 2px 5px;
            font-weight: 700;
            border-radius: 6px;
          }
        }
      }
    }
  }

  .skills {
    font-size: 22px;
    font-weight: 700;
  }
`;

const Project1 = () => {
  return (
    <Item>
      <div className="sub">팀 프로젝트</div>
      <div className="title">
        Chalkak
        <div className="period">2022.09 ~ 2022.11</div>
      </div>
      <div className="contents">
        <div className="item-img">사진</div>
        <div className="subscription">
          <div className="introduction">
            필름카메라 유저들을 위해 필름카메라에 대한 정보, 주변 현상소,
            커뮤니티를 제공하는 앱
          </div>
          <div className="team">
            ✅ TEAM : 기획자 1, 디자이너 1, 백엔드 개발자 1, 프론트엔드 개발자 2
          </div>
          <div className="role">
            ✅ 카카오 로그인, 가입 화면,앱 접근, 홈 화면, 커뮤니티 화면(글 작성,
            수정, 삭제, 댓글 작성, 수정, 삭제, 키워드 검색, 신고 기능)구현,
            Google Play Store 배포
          </div>
          <ul className="links">
            ✅ 관련 링크
            <li>
              <a href="https://www.codingfactory.net/10231">
                Github Repository
              </a>
            </li>
            <li>
              <a href="https://www.codingfactory.net/10231">Appstore</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="skills">
        ✅ 사용기술
        <div>
          <Skillitem />
        </div>
      </div>
    </Item>
  );
};

export default Project1;
