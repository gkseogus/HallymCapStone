import React from "react";
import styled from "styled-components";
import SubtractIcon from "../Img/subtractIcon.svg";

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

const MainAgain = (props) => {
  const FileDelete = () => {
    props.files.filter((files) => files.key !== props.key);
    console.log("test", props.files);
  };

  console.log("test", props.files);
  return (
    <Contain>
      <FileNameContain>
        <FileName>{props.files}</FileName>
        <SubtractContain
          src={SubtractIcon}
          alt="subtract button"
          onClick={FileDelete}
        />
      </FileNameContain>
    </Contain>
  );
};

export default MainAgain;
