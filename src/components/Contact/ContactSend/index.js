import React, { useCallback, useRef, useState } from "react";
import "./indexStyle.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Select2 from "@mui/material/Select";
import MenuItem2 from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

const FormWrap = styled.div`
  position: relative;
  width: 100%;
  height: 630px;
  background: #e8f2ff;
`;

const Form = styled.form`
  position: relative;
  width: 1194px;
  height: 100%;
  margin: auto;
`;

const FormTitle = styled.p`
  position: relative;
  width: 331px;
  height: 48px;
  margin: auto;
  top: 75px;
  font-family: "notoBold";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */

  text-align: center;

  color: #1a73e8;
`;

const FormEmail = styled.input`
  position: relative;
  margin: auto;
  top: 165px;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 68px;
  gap: 10px;

  width: 300px;
  height: 37px;
  border: none;
  border-bottom: 3px solid #202124;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: "notoMed";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  background-color: #e8f2ff;

  text-align: center;

  color: #202124;
  position: relative;

  ::placeholder {
    font-family: "notoMed";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #bbbbbb;
  }
`;

const FormContent = styled.textarea`
  top: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  font-family: "notoMed";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #202124;

  position: relative;

  width: 300px;
  height: 41px;

  border-bottom: 3px solid #202124;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  margin: auto;

  text-align: center;
  overflow-y: hidden;
  resize: none;
  background-color: #e8f2ff;
  border: none;
  border-bottom: 3px solid black;
  max-height: 66px;
  ::placeholder {
    font-family: "notoMed";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 44px;
    /* identical to box height */

    text-align: center;

    color: #bbbbbb;
  }
`;

const FormBtnContent = styled.p`
  margin-top: -1px;
  text-align: center;
  justify-content: center;
`;

const DropdownContain = styled.div`
  width: 205px;
  height: 70px;
  margin-left: 8px;
  margin-right: 21.7%;
  margin-bottom: 200px;
`;

const ContactSend = ({
  changeInput,
  inputData,
  onSaveButtonClick,
  resetForm,
  onSearchButtonClick,
}) => {
  const SELECT_LIST = [
    "rlaehgusqp@naver.com",
    "fbznffldj998@naver.com",
    "moonb1504@gmail.com",
    "jeuns1108@gmail.com",
    "tmddnjs513@naver.com",
  ];
  const DOCS_LIST = [
    "https://script.google.com/macros/s/AKfycbwC_QoWQhudZCirMHW8cD9gGhVqFgJfSSVKAagCiNR8lhOCzanA_vtiYCZMHlFxI-L7/exec",
    "https://script.google.com/macros/s/AKfycbzB5tTNPkXTmCKt3Sff2B6XrNF1v1AQKO1gBlXgTs7TjY4iNwO_ZyATWbBrEC1Yx4hR/exec",
    "https://script.google.com/macros/s/AKfycbxgWGVgrW4YOsGrrHQo7JJ6ofbnwxjFX1xgrdukwyThQnu_OGS7spXS0JsOA91xdPDu/exec",
    "https://script.google.com/macros/s/AKfycbyXa4Yrp2A2pb2gMnR1b9xYIRG2MnkxRKyH4jCz2Ruz1PUCnV7MoBrS4BVffKJjVNthfA/exec",
    "https://script.google.com/macros/s/AKfycbwdepghXyWZt875TsgMXJmPlM1zckVKjuZdEtiBr8wLNRgOOW-k06W1vVAkNCa-YyUr/exec",
  ];
  let docUrl = "";
  const { t } = useTranslation("");
  const [linkSelected, setLinkSelected] = useState("");
  const textRef = useRef();

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const handleSelect = (e) => {
    setLinkSelected(e.target.value);

    if (e.target.value !== "nothing") {
      setTimeout(handleCheck, 5000);
    }
  };

  const handleCheck = () => {
    if (linkSelected.length > 10) {
      console.log("이메일 들어옴");
      // 비밀번호가 같다면 일치
    } else {
      console.log("이메일 안들어옴");
    }
  };

  const handleSubmit = (e) => {
    alert(t("mailAle"));
  };

  return (
    <FormWrap>
      <div style={{ display: "none" }}>
        {linkSelected === "rlaehgusqp@naver.com"
          ? (docUrl = DOCS_LIST[0])
          : linkSelected === "fbznffldj998@naver.com"
          ? (docUrl = DOCS_LIST[1])
          : linkSelected === "moonb1504@gmail.com"
          ? (docUrl = DOCS_LIST[2])
          : linkSelected === "jeuns1108@gmail.com"
          ? (docUrl = DOCS_LIST[3])
          : linkSelected === "tmddnjs513@naver.com"
          ? (docUrl = DOCS_LIST[4])
          : (docUrl = "nothing")}
      </div>
      <Form
        method="post"
        action={docUrl}
        target="iframe1"
        onSubmit={handleSubmit}
      >
        <FormTitle>{t("InquiryPage6")}</FormTitle>
        <div>
          <FormEmail
            type="email"
            id="email"
            name="email"
            placeholder={t("InquiryPage7")}
          />
          <DropdownContain
            style={{
              position: "relative",
              left: "50%",
              marginLeft: "-150px",
            }}
          >
            <Select2
              className="select2"
              type="text"
              id="usr"
              name="username"
              displayEmpty
              style={{
                width: "300px",
                height: "41px",
                marginTop: "13px",
                marginLeft: "8px",
                background: "#none",

                position: "relative",

                top: "205px",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "#e8f2ff",
                border: "none",
                fontFamily: "notoMed",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "17px",
                /* identical to box height */
                color: "#bbbbbb",
                /* Inside auto layout */
                flex: "none",
                order: "1",
                flexGrow: "0",
              }}
              onChange={handleSelect}
              value={linkSelected}
              input={<OutlinedInput />}
            >
              <MenuItem2 disabled value="">
                <span>{t("InquiryPage8")}</span>
              </MenuItem2>
              {SELECT_LIST.map((name) => (
                <MenuItem2 key={name} value={name}>
                  {name}
                  {console.log(name)}
                </MenuItem2>
              ))}
            </Select2>
          </DropdownContain>
        </div>
        <div
          style={{
            position: "relative",
            top: "-225px",
          }}
        >
          <FormContent
            rows="5"
            id="comment"
            name="message"
            placeholder={t("InquiryPage9")}
            ref={textRef}
            onInput={handleResizeHeight}
          ></FormContent>
        </div>
        <button
          style={{ position: "relative", top: "78px" }}
          id="loginBtn"
          className={"unactiveBtn"}
          type="submit"
        >
          <FormBtnContent>{t("InquiryPage10")}</FormBtnContent>
        </button>
      </Form>
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe id="iframe1" name="iframe1" style={{ display: "none" }} />
    </FormWrap>
  );
};

export default ContactSend;
