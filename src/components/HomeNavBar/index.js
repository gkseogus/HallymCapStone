import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GlobalIcon from "./Img/globalIcon.svg";
// import i18next from "../MainNavBar/I18n/index";
import navbarLogoIcon from "./Img/navbarLogoIcon.svg";
import eyeTagIcon from "./Img/eyeTagIcon.svg";

const Contain = styled.nav`
  width: 100vw;
  height: 80px;
  left: 0px;
  top: 0px;
  display: flex;
  position: fixed;
  background-color: white;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
  z-index: 10;
`;

const LogoContain = styled.img`
  width: 60px;
  height: 60px;
  left: 0px;
  top: 10px;
  margin: auto;
  margin-left: 18.5%;
`;

const EyeTagIconContain = styled.img`
  position: absolute;
  width: 83px;
  height: 30px;
  left: 100px;
  top: 10px;
  margin-top: 10px;
  margin-left: 18%;
`;

const NavLinkContain = styled(Link)`
  text-decoration: none;
`;

const FirstNavLinkText = styled.h2`
  width: 122px;
  height: 40px;
  margin-top: 20px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  background-color: #1a73e8;
  display: grid;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 30px;
  font-family: "Noto Sans CJK KR";
`;

const SecondNavLinkText = styled.h2`
  width: 122px;
  height: 40px;
  margin-top: 20px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  background-color: none;
  display: grid;
  color: #202124;
  font-size: 16px;
  font-weight: 700;
  border-radius: 30px;
  font-family: "Noto Sans CJK KR";
`;

const IconContain = styled.img`
  width: 20px;
  height: 20px;
  top: 9.5px;
  left: 4px;
  margin-left: 30.5px;
  margin-top: 29.5px;
`;

const DropdownContain = styled.div`
  width: 55px;
  height: 21px;
  margin-top: 13px;
  margin-left: 8px;
  margin-right: 21.7%;
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

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Contain>
      <LogoContain src={navbarLogoIcon} alt="navbarLogoIcon" />
      <EyeTagIconContain src={eyeTagIcon} alt="eyeTagIcon" />
      <NavLinkContain onClick={ScrollTop} to="/main">
        <FirstNavLinkText>Get Started</FirstNavLinkText>
      </NavLinkContain>
      <NavLinkContain onClick={ScrollTop} to="/contact">
        <SecondNavLinkText>Contact Us</SecondNavLinkText>
      </NavLinkContain>
      <IconContain src={GlobalIcon} alt="globalIcon" />
      <DropdownContain>
        <Select
          value={dropCount}
          onChange={handleChange}
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
