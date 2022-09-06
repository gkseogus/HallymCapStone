import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  width: 1194px;
  height: 1000px;
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
  flex-direction: "row";
  flex-wrap: "wrap";
  background-color: #ffffff;
`;

const FileName = styled.aside`
  position: absolute;
  margin-left: 3%;
  font-size: 18px;
  color: #444444;
  float: left;
`;

const MainAgain = (props) => {
  return (
    <Contain>
      <FileNameContain>
        <FileName>{props.files}</FileName>
      </FileNameContain>
    </Contain>
  );
};

export default MainAgain;
