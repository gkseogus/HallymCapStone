import React, { useCallback, useRef, useState } from "react";
import "./indexStyle.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const FormWrap = styled.div`
  position: relatvie;
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

const FormDevEmail = styled.select`
  position: relative;

  top: 205px;
  margin: auto;

  text-align: center;
  background-color: #e8f2ff;
  border: none;
  border-bottom: 3px solid black;
  font-family: "notoMed";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #bbbbbb;
  padding-bottom: 10px;

  width: 300px;
  height: 41px;

  border-bottom: 3px solid #202124;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  &:hover {
    cursor: pointer;
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
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #bbbbbb;
  }
`;

const FormOption = styled.option`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 39.5px;

  line-height: 30px;
  font-family:"notoMed";
  gap: 5px;
  height: 41px;
  width: 300px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 60%;
  bottom: 20%;
  color: black;

  background: #ffffff;
`;
// const FormBtn = styled.button`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 12px 24px;
//   gap: 10px;

//   position: relative;
//   width: 115px;
//   height: 57px;

//   top: 318px;
//   margin: auto;

//   font-family: "Pretendard";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 28px;
//   line-height: 33px;
//   text-align: center;

//   color: #ffffff;

//   background: #cccccc;
//   box-shadow: 3px 5px 10px rgba(32, 33, 36, 0.15);
//   border-radius: 100px;
//   border: none;
//   &:hover {
//     cursor: pointer;
//   }
// `;

const FormBtnContent = styled.p`
  margin-top: -3px;
  font-family: notoBold;
  text-align:center;
  justify-content:center;
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
  const [Selected, setSelected] = useState("");
  var docUrl = "";
  const { t } = useTranslation("");

  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const selectList = [
    "rlaehgusqp@naver.com",
    "fbznffldj998@naver.com",
    "moonb1504@gmail.com",
    "jeuns1108@gmail.com",
    "tmddnjs513@naver.com",
  ];
  const docsList = [
    "https://script.google.com/macros/s/AKfycbwC_QoWQhudZCirMHW8cD9gGhVqFgJfSSVKAagCiNR8lhOCzanA_vtiYCZMHlFxI-L7/exec",
    "https://script.google.com/macros/s/AKfycbzB5tTNPkXTmCKt3Sff2B6XrNF1v1AQKO1gBlXgTs7TjY4iNwO_ZyATWbBrEC1Yx4hR/exec",
    "https://script.google.com/macros/s/AKfycbxgWGVgrW4YOsGrrHQo7JJ6ofbnwxjFX1xgrdukwyThQnu_OGS7spXS0JsOA91xdPDu/exec",
    "https://script.google.com/macros/s/AKfycbyXa4Yrp2A2pb2gMnR1b9xYIRG2MnkxRKyH4jCz2Ruz1PUCnV7MoBrS4BVffKJjVNthfA/exec",
    "https://script.google.com/macros/s/AKfycbwdepghXyWZt875TsgMXJmPlM1zckVKjuZdEtiBr8wLNRgOOW-k06W1vVAkNCa-YyUr/exec",
  ];

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const [inputValue, setInputValue] = useState(false);
  const inputTest = (e) => {
    if (e.target.value != "") {
      setInputValue(true);
      console.log(inputValue);
    } else if (e.target.value == "") {
      setInputValue(false);
      console.log(inputValue);
    }
  };

  function handleSubmit(e) {
    alert(t("mailAle"));
  }

  return (
    <FormWrap>
      <div style={{ display: "none" }}>
        {Selected === "rlaehgusqp@naver.com"
          ? (docUrl = docsList[0])
          : Selected === "fbznffldj998@naver.com"
          ? (docUrl = docsList[1])
          : Selected === "moonb1504@gmail.com"
          ? (docUrl = docsList[2])
          : Selected === "jeuns1108@gmail.com"
          ? (docUrl = docsList[3])
          : Selected === "tmddnjs513@naver.com"
          ? (docUrl = docsList[4])
          : console.log("")}
      </div>
      <Form
        method="post"
        action={docUrl}
        target="iframe1"
        onSubmit={handleSubmit}
      >
        <FormTitle>{t("InquiryPage6")}</FormTitle>
        <div>
          {/*이메일*/}
          <FormEmail
            type="email"
            id="email"
            name="email"
            placeholder={t("InquiryPage7")}
            onChange={inputTest}
          />

          {/*Select 이메일 */}
          <div>
            <FormDevEmail
              type="text"
              id="usr"
              name="username"
              placeholder="Select an address to send to"
              onChange={handleSelect}
              value={Selected}
            >
              <FormOption>{t("InquiryPage8")}</FormOption>
              {selectList.map((item) => (
                <FormOption value={item} key={item}>
                  {item}
                </FormOption>
              ))}
            </FormDevEmail>
          </div>
        </div>

        {/*Comment 콘텐츠*/}
        <div>
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
          id="loginBtn"
          className={"unactiveBtn"}
          type="submit"
        >
          <FormBtnContent>{t("InquiryPage10")}</FormBtnContent>
        </button>
      </Form>
      <iframe id="iframe1" name="iframe1" style={{ display: "none" }} />

      <DropdownContain>
        <Select
          displayEmpty
          style={{
            width: "95px",
            height: "25px",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "13px",
            marginLeft: "8px",
            background: "#none",
          }}
        >
          <MenuItem
            value=""
            style={{
              fontWeight: 600,
            }}
          >
            EN
          </MenuItem>
          <MenuItem
            value={10}
            style={{
              fontWeight: 600,
            }}
          >
            한국어
          </MenuItem>
          <MenuItem
            value={20}
            style={{
              fontWeight: 600,
            }}
          >
            日本語
          </MenuItem>
          <MenuItem
            value={30}
            style={{
              fontWeight: 600,
            }}
          >
            中文
          </MenuItem>
        </Select>
      </DropdownContain>

    </FormWrap>
  );
};

export default ContactSend;
