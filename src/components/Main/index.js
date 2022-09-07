import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import DropIcon from "../Main/Img/dropIcon.svg";
import MainAgain from "./MainAgain";

const Contain = styled.div`
  width: 1194px;
  height: 1000px;
  position: relative;
  left: 50%;
  margin-top: 80px;
  margin-left: -597px;
  background-color: #f0f0f0;
`;

const DropzoneContain = styled.div`
  width: 846px;
  height: 578px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;

const InputContain = styled.div`
  width: 400;
  height: 184px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;

const Inputprops = styled.input``;

const InputText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #444444;
`;

const InputLogoContain = styled.img`
  width: 55px;
  height: 55px;
  margin: auto;
  margin-top: 100px;
`;

const SelectButton = styled.button`
  width: 185px;
  height: 65px;
  border: 0;
  outline: 0;
  top: 90%;
  position: relative;
  border-radius: 100px;
  background-color: #1a73e8;
`;

const SelectText = styled.p`
  cursor: pointer;
  margin: auto;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
`;

const Main = (props) => {
  const [change, setChange] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setChange(!change);
      // Do something with the files
      console.log(acceptedFiles);
    },
    [change]
  );

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "video/*": [],
    },
  });

  const files = acceptedFiles.map((file) => (
    <h2 key={file.path}>{file.path}</h2>
  ));

  return (
    <div>
      {change ? (
        <MainAgain files={files} />
      ) : (
        <Contain>
          <DropzoneContain {...getRootProps({ className: "dropzone" })}>
            <InputContain>
              <Inputprops {...getInputProps()} />
              <InputText>Dropdown your video or Select File</InputText>
              <InputLogoContain src={DropIcon} alt="dropIcon" />
            </InputContain>
          </DropzoneContain>
          <SelectButton>
            <SelectText onClick={open}>Select File </SelectText>
          </SelectButton>
        </Contain>
      )}
    </div>
  );
};

export default Main;
