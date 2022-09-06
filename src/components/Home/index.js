import React from "react";
import styled from "styled-components";

const Home1 = styled.div`
  position: relative;
  width: 1194px;
  height: 840px;
  left: 50%;
  margin-top: 80px;
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

  color: #000000;
`;
const StartBtn = styled.div`
  padding: 15px 30px;

  position: absolute;
  width: 223px;
  height: 66px;
  bottom: 54px;
  right: 47px;

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
  width: 1174px;
  height: 916px;
  left: 50%;
  margin-left: -597px;
  background-color: #eeeeee;
`;
const Home3Bottom = styled.div`
  display: flex;
  position: relative;
  width: 1174px;
  height: 20px;
  left: 50%;
  margin-left: -597px;
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
  left: 0;
  background-color: #aaaaaa;
`;
const Home3Bottom3 = styled.div`
  position: relative;
  width: 596.5px;
  height: 20px;
  right: 0;
  background-color: #444444;
`;

const Home = () => {
  return (
    <div>
      <Home1>
        <div>
          <Home1P1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Home1P1>
          <Home1P2>Mattis ipsum purus ante in ac.</Home1P2>
        </div>
        <StartBtn>Get Started</StartBtn>
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
        <p>Recommended explanation according to the purpose of use</p>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            Orci amet lectus adipiscing venenatis, tempor non nisl mi
            condimentum. Non, magna eget velit, justo, iaculis. Quam morbi massa
            ipsum amet interdum
          </p>
        </div>
        <Home3Bottom>
          <Home3Bottom1>299</Home3Bottom1>
          <Home3Bottom2>298.5</Home3Bottom2>
          <Home3Bottom3>596.5</Home3Bottom3>
        </Home3Bottom>
      </Home3>
    </div>
  );
};

export default Home;
