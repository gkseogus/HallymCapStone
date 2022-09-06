import { display } from "@mui/system";
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
  display: ${(props) => (props.toggle ? "none" : "block")};
`;

const MainAgainContain = styled.div`
  display: ${(props) => (props.toggle ? "block" : "none")};
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
  font-size: 24px;
  font-weight: 600;
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
  font-size: 28px;
  margin: auto;
  color: #ffffff;
`;

const Main = (props) => {
  const [toggle, setToggle] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setToggle(!toggle);
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

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
      <Contain toggle={toggle}>
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
      <MainAgainContain toggle={toggle}>
        <MainAgain files={files} />
      </MainAgainContain>
    </div>
  );
};

export default Main;
