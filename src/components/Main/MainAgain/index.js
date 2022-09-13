import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import SubtractIcon from "../Img/subtractIcon.svg";
import Main from "../index";
import MainAnalyze from "../MainAnalyze";

const Contain = styled.div`
  width: 1194px;
  height: 958px;
  position: relative;
  left: 50%;
  margin-top: 80px;
  margin-left: -597px;
  background-color: #f0f0f0;
`;

const Circle = styled.div`
  width: 346px;
  height: 346px;
  margin-top: 111px;
  margin-left: 40px;
  border-radius: 100%;
  background-color: #c8e1ff;
  position: absolute;
  ${(props) =>
    props.pink &&
    css`
      width: 81px;
      height: 81px;
      margin-top: 412px;
      margin-left: 102px;
      border-radius: 100%;
      background-color: #ffc8f9;
      position: absolute;
    `}
  ${(props) =>
    props.aqua &&
    css`
      width: 133px;
      height: 133px;
      margin-top: 622px;
      margin-left: 272px;
      border-radius: 100%;
      background-color: #bcf7f3;
      position: absolute;
    `}
    ${(props) =>
    props.green &&
    css`
      width: 153px;
      height: 153px;
      margin-top: 401px;
      margin-left: 574px;
      border-radius: 100%;
      background-color: #c8e9a7;
      position: absolute;
    `}
    ${(props) =>
    props.red &&
    css`
      width: 207px;
      height: 207px;
      margin-top: 718px;
      margin-left: 724px;
      border-radius: 100%;
      background-color: #ffaaaa;
      position: absolute;
    `}
    ${(props) =>
    props.yellow &&
    css`
      width: 265px;
      height: 265px;
      margin-top: 224px;
      margin-left: 929px;
      border-radius: 100%;
      background-color: #f5d29c;
      position: absolute;
    `}
`;

const FileNameContain = styled.div`
  width: 905px;
  height: 60px;
  border: 3px solid #444444;
  border-radius: 10px;
  stroke-width: 10px;
  margin-top: 360px;
  margin-left: 144px;
  position: absolute;
  background-color: #ffffff;
  z-index: 1;
`;

const FileName = styled.aside`
  width: 293px;
  height: 27px;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-left: 30px;
  margin-top: 17px;
  font-size: 18px;
  color: #444444;
`;

const SubtractContain = styled.img`
  cursor: pointer;
  margin-top: 18.5px;
  margin-left: 851px;
`;

const BtnContain = styled.div`
  position: absolute;
  margin-left: 1%;
`;

const SelectButton = styled.button`
  cursor: pointer;
  width: 212px;
  height: 65px;
  border-radius: 100px;
  border: 0;
  outline: 0;
  margin-top: 540px;
  margin-left: 356px;
  margin-right: 59px;
  box-shadow: 3px 5px 10px rgba(32, 33, 36, 0.15);
  background-color: #cccccc;
`;

const AnalyzeButton = styled.button`
  cursor: pointer;
  width: 212px;
  height: 65px;
  border-radius: 100px;
  border: 0;
  outline: 0;
  margin-top: 540px;
  margin-right: 329px;
  box-shadow: 3px 5px 10px rgba(32, 33, 36, 0.15);
  background-color: #1a73e8;
`;

const ButtonText = styled.p`
  margin-top: 12px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
`;

const MainAgain = (props) => {
  const [change, setChange] = useState(false);
  const [changeAnal, setChangeAnal] = useState(false);

  const SelectAgain = useCallback(() => {
    setChange(!change);
    setChangeAnal(changeAnal);
  }, [change, changeAnal]);

  const SelectAnalyze = useCallback(() => {
    setChange(change);
    setChangeAnal(!changeAnal);
  }, [change, changeAnal]);

  return (
    <div>
      {change && !changeAnal ? (
        <Main />
      ) : !change && changeAnal ? (
        <MainAnalyze />
      ) : !change && !changeAnal ? (
        <Contain>
          <Circle />
          <Circle pink />
          <Circle aqua />
          <Circle green />
          <Circle red />
          <Circle yellow />
          <FileNameContain>
            <FileName>{props.files}</FileName>
            <SubtractContain
              src={SubtractIcon}
              alt="subtract button"
              onClick={SelectAgain}
            />
          </FileNameContain>
          <BtnContain>
            <SelectButton>
              <ButtonText onClick={SelectAgain}>Select Again</ButtonText>
            </SelectButton>
            <AnalyzeButton>
              <ButtonText onClick={SelectAnalyze}>Analyze video</ButtonText>
            </AnalyzeButton>
          </BtnContain>
        </Contain>
      ) : null}
    </div>
  );
};

export default MainAgain;
