import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home1 = styled.div`
  position: relative;
  width: 1194px;
  height: 840px;
  margin-top: 80px;
  left: 50%;
  margin-left: -597px;
  background-color: #eeeeee;
`;

const Home1P1 = styled.div`
  position: absolute;
  width: 550px;
  height: 96px;
  left: 82px;
  top: 58px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: start;
  color: #000000;
`;

const Home1P2 = styled.div`
  position: absolute;
  width: 430px;
  height: 33px;
  left: 82px;
  top: 184px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  text-align: start;

  color: #000000;
`;
const NavStartBtn = styled(Link)`
  padding: 15px 30px;

  position: absolute;
  width: 223px;
  height: 66px;
  bottom: 54px;
  right: 47px;
  text-decoration: none;
  background: #999999;
  border-radius: 35px;
  color: white;

  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  line-height: 66px;
`;

const Home2 = styled.div`
  display: flex;
  position: relative;
  width: 1194px;
  height: 642px;
  left: 50%;
  margin-left: -597px;
`;

const Home2Left = styled.div`
  position: relative;
  width: 875.45px;
  height: 642px;
  left: calc(50% - 159.27px);
  margin-left: -437.7px;
  background-color: #999999;
`;
const Home2Right = styled.div`
  position: relative;
  width: 318.55px;
  height: 642px;
  left: 50%;
  margin-left: -159.27px;
  background-color: #d9d9d9;
`;

const Home2P1 = styled.p`
  position: absolute;
  width: 450px;
  height: 76px;
  right: 0;
  top: 239px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: right;

  color: #000000;
`;

const Home2P2 = styled.p`
  position: absolute;
  width: 370px;
  height: 29px;
  right: 0;
  top: 353px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-align: right;

  color: #000000;
`;

const Home2P3 = styled.p`
  position: absolute;
  width: 470px;
  height: 116px;
  right: 0;
  bottom: 60px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #000000;
`;

const Home3 = styled.div`
  position: relative;
  width: 1194px;
  height: 896px;
  left: 50%;
  margin-left: -597px;
  background-color: #eeeeee;
`;

const Home3Img = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 110px;
  top: 150px;
  background-color: rgb(199, 199, 199);
`;

const Home3P1 = styled.div`
  position: absolute;
  width: 620px;
  height: 96px;
  left: 60px;
  top: 50px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: start;

  color: #000000;
`;

const Home3ImgWrap = styled.div`
  position: absolute;
  width: 420px;
  height: 500px;
  left: 169px;
  top: 266px;

  background: #d9d9d9;
  border-radius: 20px;
`;

const Home3P2 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 649px;
  top: 302px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: start;

  color: #000000;
`;

const Home3P3 = styled.p`
  position: absolute;
  width: 447px;
  height: 116px;
  left: 649px;
  top: 400px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: start;

  color: #000000;
`;

const Home3Bottom = styled.div`
  display: flex;
  position: absolute;
  width: 1194px;
  height: 20px;
  left: 50%;
  margin-left: -597px;
  bottom: 0;
`;
const Home3Bottom1 = styled.div`
  position: relative;
  width: 299px;
  height: 20px;
  left: 0;
  background-color: #444444;
`;
const Home3Bottom2 = styled.div`
  position: relative;
  width: 298.5px;
  height: 20px;
  background-color: #aaaaaa;
`;
const Home3Bottom3 = styled.div`
  position: relative;
  width: 596.5px;
  height: 20px;
  right: 0;
  background-color: #444444;
`;

const Home4 = styled.div`
  position: relative;
  width: 1194px;
  height: 2160px;
  background-color: #d9d9d9;
  left: 50%;
  margin-left: -597px;
`;

const Home4P1 = styled.p`
  position: absolute;
  width: 409px;
  height: 48px;
  left: 58px;
  top: 46px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */
  color: #000000;
`;
const Home4Div1 = styled.div`
  position: absolute;
  width: 510.5px;
  height: 510px;
  left: 72px;
  top: 232px;
  background-color: #eeeeee;
`;
const Home4P2 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 642px;
  top: 302px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: start;

  color: #000000;
`;
const Home4P3 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 642px;
  top: 400px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #000000;

  text-align: start;
`;
const Home4P4 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 144px;
  top: 923px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: right;
  text-align: end;

  color: #000000;
`;
const Home4P5 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 105px;
  top: 1021px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #000000;
`;
const Home4P6 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 105px;
  top: 1197px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #000000;

  text-align: end;
`;
const Home4Div2 = styled.div`
  position: absolute;
  width: 510px;
  height: 640px;
  left: 612px;
  top: 892px;
  background-color: #eeeeee;
`;
const Home4P7 = styled.p`
  position: absolute;
  width: 430px;
  height: 38px;
  left: 102px;
  top: 1603px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #000000;
`;
const Home4Div3 = styled.div`
  position: absolute;
  width: 987px;
  height: 400px;
  left: 105px;
  bottom: 59px;
  background-color: #eeeeee;
`;

const Home = () => {
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Home1>
        <div>
          <Home1P1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Home1P1>
          <Home1P2>Mattis ipsum purus ante in ac.</Home1P2>
        </div>
        <NavStartBtn onClick={ScrollTop} to="/main">
          Get Started
        </NavStartBtn>
      </Home1>

      <Home2>
        <Home2Left />
        <Home2Right>
          <Home2P1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Home2P1>
          <Home2P2>Mattis ipsum purus ante in ac.</Home2P2>
          <Home2P3>
            Orci amet lectus adipiscing venenatis, tempor non nisl mi
            condimentum. Non, magna eget velit, justo, iaculis. Quam morbi massa
            ipsum amet interdum
          </Home2P3>
        </Home2Right>
      </Home2>
      <Home3>
        <Home3P1>
          Recommended explanation according to the purpose of use
        </Home3P1>
        <Home3ImgWrap>
          <Home3Img>img 파일</Home3Img>
        </Home3ImgWrap>
        <Home3P2>Lorem ipsum dolor sit amet</Home3P2>
        <Home3P3>
          Orci amet lectus adipiscing venenatis, tempor non nisl mi condimentum.
          Non, magna eget velit, justo, iaculis. Quam morbi massa ipsum amet
          interdum
        </Home3P3>
        <Home3Bottom>
          <Home3Bottom1 />
          <Home3Bottom2 />
          <Home3Bottom3 />
        </Home3Bottom>
      </Home3>

      <Home4>
        <Home4P1>Technical Description</Home4P1>

        <Home4Div1></Home4Div1>
        <Home4P2>Lorem ipsum dolor sit amet</Home4P2>
        <Home4P3>
          Orci amet lectus adipiscing venenatis, tempor non nisl mi condimentum.
          Non, magna eget velit, justo, iaculis. Quam morbi massa ipsum amet
          interdum
        </Home4P3>

        <Home4P4>Lorem ipsum dolor sit amet</Home4P4>
        <Home4P5>
          Orci amet lectus adipiscing venenatis, tempor non nisl mi condimentum.
          Non, magna eget velit, justo, iaculis. Quam morbi massa ipsum amet
          interdum
        </Home4P5>
        <Home4P6>
          Orci amet lectus adipiscing venenatis, tempor non nisl mi condimentum.
          Non, magna eget velit, justo, iaculis. Quam morbi massa ipsum amet
          interdum
        </Home4P6>
        <Home4Div2></Home4Div2>

        <Home4P7>Lorem ipsum dolor sit amet</Home4P7>
        <Home4Div3></Home4Div3>
      </Home4>
    </div>
  );
};

export default Home;
