import styled from "styled-components";
import colors from "../../assets/color";

const SubTitle = styled.div`
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Container = styled.div`
// width:100%;
display:flex;
margin-top: 70px;

.lines{
  margin-left:40px;
  margin-top:6px;
  
  .dot{
    width:14px;
    height:14px;
    background: ${colors.dark};
    border-radius:7px;
  }
  
  .line{
    height:126px;
    width:2px;
    background: ${colors.dark};
    margin-left:5.3px;
  }
}

.cards{
  margin-left:12px;
  transform:translateY(-50px);



  .card{
    width:650px;
    height:93px;
    padding:10px 0 25px 0;
    background: ${colors.dark};
    border-radius: 10px;
    box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
    margin-bottom:10px;
    
    &.mid{
    //   height:71px;
    }

    h4{
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-left:25px;
        margin-bottom:5px;
        color: ${colors.light};
      }
      
      p{
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 22px;
        color: white;
        margin-left:25px;
      }
    }
  }

}

`;

const Education = () => {
  return (
    <>
      <SubTitle>education</SubTitle>
      <Container>
        <div className="lines">
          <div className="dot"></div>
          <div className="line"></div>
          <div className="dot"></div>
          <div className="line"></div>
          <div className="dot"></div>
          <div className="line"></div>
          <div className="dot"></div>
        </div>

        <div className="cards">
          <div className="card">
            <h4>2019.03 ~</h4>
            <p>가톨릭대학교 공간디자인소비자학과 / 컴퓨터정보공학부</p>
          </div>
          <div className="card mid">
            <h4>2022.03 ~ 2022.05</h4>
            <p>컴공선배 라이징캠프 Web 과정 수료</p>
          </div>
          <div className="card">
            <h4>14:15</h4>
            <p>Break Through Self Doubt And Fear</p>
          </div>
          <div className="card">
            <h4>14:15</h4>
            <p>Break Through Self Doubt And Fear</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Education;
