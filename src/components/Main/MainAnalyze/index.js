import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  width: 1194px;
  height: 958px;
  position: relative;
  left: 50%;
  margin-top: 80px;
  margin-left: -597px;
  background-color: #f0f0f0;
`;

const SuccessContain = styled.div`
  width: 265px;
  height: 36px;
  position: absolute;
  margin-top: 220px;
  margin-left: 446px;
  text-align: center;
`;

const SussessTextContain = styled.div`
  margin-top: 146px;
  margin-left: 476px;
  position: absolute;
`;

const SuccessText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  color: #000000;
`;

const SuccessItem = styled.div`
  width: 300px;
  height: 300px;
  left: 811px;
  top: 398px;
  margin-top: 54px;
  background-color: black;
`;

const AnalyzeButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 198px;
  position: absolute;
  width: 238px;
  height: 65px;
  left: 12%;
  background: #1a73e8;
  box-shadow: 3px 5px 10px rgba(26, 115, 232, 0.15);
  border-radius: 100px;
  border: 0;
  outline: 0;
`;

const AnalyzeText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
`;

const MainAnalyze = () => {
  return (
    <Contain>
      <SussessTextContain>
        <SuccessText>Analysis Success!</SuccessText>
      </SussessTextContain>
      <SuccessContain>
        <SuccessItem />
        <AnalyzeButton>
          <AnalyzeText>Analyze video</AnalyzeText>
        </AnalyzeButton>
      </SuccessContain>
    </Contain>
  );
};

export default MainAnalyze;
