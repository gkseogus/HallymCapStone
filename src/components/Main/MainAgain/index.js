import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import axios from "axios";
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
  width: 760px;
  height: 60px;
  order: 0;
  flex-grow: 0;
  stroke-width: 10px;
  margin-top: 360px;
  margin-left: 240px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
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
  margin-left: 700px;
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
  margin-top: 15px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MainAgain = (props) => {
  const [change, setChange] = useState(false);
  const [changeAnalyze, setChangeAnalyze] = useState(false);
  const [downFile, setDownFile] = useState(props.files[0].key);
  const { t } = useTranslation("");

  const chooseAgain = useCallback(() => {
    setChange(!change);
  }, [change]);

  const SelectAnalyze = async () => {
    setChange(change);
    setChangeAnalyze(!changeAnalyze);
    try {
      //Successful response
      await axios.post("http://localhost:8000/api/insert", {
        file: downFile[0].key,
      });
    } catch (error) {
      //Failed to respond
      console.log("write error", error);
    }
  };

  useEffect(() => {
    if (downFile.length > 11) {
      setDownFile(downFile.substr(0, 8) + "...");
    }
  }, [downFile]);

  return (
    <div>
      {change ? (
        <Main />
      ) : changeAnalyze ? (
        <MainAnalyze files={props.files} />
      ) : !change ? (
        <Contain>
          <Circle />
          <Circle pink />
          <Circle aqua />
          <Circle green />
          <Circle red />
          <Circle yellow />
          <FileNameContain>
            <FileName>{downFile}</FileName>
            <SubtractContain
              src={SubtractIcon}
              alt="subtract button"
              onClick={chooseAgain}
            />
          </FileNameContain>
          <BtnContain>
            <SelectButton>
              <ButtonText onClick={chooseAgain}>{t("mainPage3")}</ButtonText>
            </SelectButton>
            <AnalyzeButton>
              <ButtonText onClick={SelectAnalyze}>{t("mainPage4")}</ButtonText>
            </AnalyzeButton>
          </BtnContain>
        </Contain>
      ) : null}
    </div>
  );
};

export default MainAgain;
