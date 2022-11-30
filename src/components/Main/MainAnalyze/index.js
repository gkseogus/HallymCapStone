import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import Main from "..";
import successImg from "./Img/successImg.png";

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
  margin-left: 534px;
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

const SuccessItem = styled.img`
  width: 300px;
  height: 300px;
  left: 811px;
  top: 398px;
  margin-top: 54px;
`;

const AnotherButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 150px;
  position: absolute;
  right: 150px;
  width: 196px;
  height: 59px;
  background: #10bc7e;
  box-shadow: 0px 4px 10px rgba(16, 188, 126, 0.15);
  border-radius: 30px;
  border: 0;
  outline: 0;
`;

const AnotherText = styled.p`
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
  margin-top: 15px;
`;

const DownloadButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  position: absolute;
  width: 172px;
  height: 59px;
  left: 80%;
  background: #1a73e8;
  box-shadow: 0px 4px 10px rgba(26, 115, 232, 0.15);
  border-radius: 30px;
  border: 0;
  outline: 0;
`;

const DownloadText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`;

const MainAnalyze = (props) => {
  const [another, setAnother] = useState(false);
  const { t } = useTranslation("");

  const ahotherFile = useCallback(() => {
    setAnother(!another);
  }, [another]);

  const downloadFile = useCallback(() => {
    let fileName = props.files[0].key;
    let OUTPUT = "* 타입의 데이터";
    const element = document.createElement("a");
    const file = new Blob([OUTPUT], {
      type: "*",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click(alert(t("mainPage10")));
  }, [props.files, t]);

  return (
    <div>
      {another ? (
        <Main />
      ) : (
        <Contain>
          <Circle />
          <Circle pink />
          <Circle aqua />
          <Circle green />
          <Circle red />
          <Circle yellow />
          <SussessTextContain>
            <SuccessText>{t("mainPage7")}</SuccessText>
          </SussessTextContain>
          <SuccessContain>
            <SuccessItem src={successImg} alt="successImg" />
            <AnotherButton onClick={ahotherFile}>
              <AnotherText>{t("mainPage8")}</AnotherText>
            </AnotherButton>
            <DownloadButton>
              <DownloadText onClick={downloadFile}>
                {t("mainPage9")}
              </DownloadText>
            </DownloadButton>
          </SuccessContain>
        </Contain>
      )}
    </div>
  );
};

export default MainAnalyze;
