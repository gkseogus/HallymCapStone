import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Main from "..";

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

const SuccessItem = styled.div`
  width: 300px;
  height: 300px;
  left: 811px;
  top: 398px;
  margin-top: 54px;
  background-color: black;
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

  const ahotherFile = useCallback(() => {
    setAnother(!another);
  }, [another]);

  const downloadFile = useCallback(() => {
    let fileName = props.files[0].key;
    let output = "string 타입의 데이터";
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "video/*",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  }, [props.files]);

  console.log(props.files[0].key);
  return (
    <div>
      {another ? (
        <Main />
      ) : (
        <Contain>
          <SussessTextContain>
            <SuccessText>Success!</SuccessText>
          </SussessTextContain>
          <SuccessContain>
            <SuccessItem />
            <AnotherButton onClick={ahotherFile}>
              <AnotherText>Another File</AnotherText>
            </AnotherButton>
            <DownloadButton>
              <DownloadText onClick={downloadFile}>Download</DownloadText>
            </DownloadButton>
          </SuccessContain>
        </Contain>
      )}
    </div>
  );
};

export default MainAnalyze;
