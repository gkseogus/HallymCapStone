import React, { useCallback, useState } from "react";
import styled from "styled-components";
import SubtractIcon from "../Img/subtractIcon.svg";
import Main from "../index";

const Contain = styled.div`
  width: 1194px;
  height: 958px;
  position: relative;
  left: 50%;
  margin-top: 80px;
  margin-left: -597px;
  background-color: #f0f0f0;
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

  const FileDelete = () => {
    props.files.filter((files) => files.key !== props.key);
    console.log("test", props.files);
  };

  const SelectAgain = useCallback(() => {
    setChange(!change);
  }, [change]);

  return (
    <div>
      {change ? (
        <Main />
      ) : (
        <Contain>
          <FileNameContain>
            <FileName>{props.files}</FileName>
            <SubtractContain
              src={SubtractIcon}
              alt="subtract button"
              onClick={FileDelete}
            />
          </FileNameContain>
          <SelectButton>
            <ButtonText onClick={SelectAgain}>Select Again</ButtonText>
          </SelectButton>
          <AnalyzeButton>
            <ButtonText>Analyze video</ButtonText>
          </AnalyzeButton>
        </Contain>
      )}
    </div>
  );
};

export default MainAgain;
