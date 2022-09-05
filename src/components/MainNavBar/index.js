import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// import i18next from "../MainNavBar/I18n/index";

const Contain = styled.nav`
  width: 100vw;
  height: 80px;
  top: 0;
  display: flex;
`;

const LogoContain = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  margin-left: 20%;
  background-color: #999999;
  border-radius: 10px;
`;

const LogoText = styled.h2`
  color: #ffffff;
  font-size: 16px;
`;

const NavLinkContain = styled(Link)`
  text-decoration: none;
`;

const FirstNavLinkText = styled.h2`
  width: 160px;
  height: 48px;
  margin: 13px;
  justify-content: center;
  align-items: center;
  background-color: #1a73e8;
  display: grid;
  color: #ffffff;
  font-size: 16px;
  border-radius: 30px;
`;

const SecondNavLinkText = styled.h2`
  width: 160px;
  height: 48px;
  margin: 13px;
  justify-content: center;
  align-items: center;
  background-color: none;
  display: grid;
  color: #202124;
  font-size: 16px;
  border-radius: 30px;
`;

const IconContain = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 3%;
  margin-top: 30px;
`;

const DropdownContain = styled.div`
  width: 60px;
  height: 25px;
  margin-top: 13px;
  margin-right: 4%;
`;

const MainNavBar = () => {
  const [dropCount, setDropCount] = useState("");

  const handleChange = (event) => {
    setDropCount(event.target.value);
  };

  // 다국어 처리 기능 함수
  //   const { t } = useTranslation();

  //   const clickHandler = (lang) => {
  //     i18next.changeLanguage(lang);
  //   };

  return (
    <Contain>
      <LogoContain>
        {/* Logo는 예시 -> 나중에 이미지로 교체 */}
        <LogoText>Logo</LogoText>
      </LogoContain>
      <NavLinkContain to="/home">
        <FirstNavLinkText>Get Started</FirstNavLinkText>
      </NavLinkContain>
      <NavLinkContain to="/contact">
        <SecondNavLinkText>Contact Us</SecondNavLinkText>
      </NavLinkContain>
      <IconContain>
        <AiOutlineGlobal />
      </IconContain>
      <DropdownContain>
        <Select
          value={dropCount}
          onChange={handleChange}
          displayEmpty
          style={{
            width: "80px",
            height: "25px",
            fontSize: "16px",
            fontWeight: "600",
            margin: "13px",
            background: "#none",
          }}
        >
          <MenuItem value="">
            <em
              style={{
                fontWeight: 600,
              }}
            >
              EN
            </em>
            {/* <em onClick={() => clickHandler("ko")}>KO</em> */}
          </MenuItem>
          {/* <MenuItem value={10} onClick={() => clickHandler("en")}>
            EN
          </MenuItem> */}
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
    </Contain>
  );
};

export default MainNavBar;
