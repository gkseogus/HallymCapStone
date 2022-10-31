import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import i18n from "../../lang/i18n";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GlobalIcon from "./Img/globalIcon.svg";
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
  ${({ active }) => {
    if (active === true)
      return css`
        filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
      `;
  }}
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
  background-color: none;
  display: grid;
  color: #202124;
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

const MainNavBar = ({ scroll }) => {
  const [toScroll, setToScroll] = useState(false);
  const [dropCount, setDropCount] = useState("");
  const { t } = useTranslation("");

  const handleChange = (event) => {
    setDropCount(event.target.value);
  };

  const handleScroll = () => {
    // 스크롤이 Top에서 10px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 10) {
      setToScroll(!toScroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setToScroll(toScroll);
    }
  };

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  // 다국어 처리 기능 함수
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Contain active={toScroll}>
      <LogoContain src={navbarLogoIcon} alt="navbarLogoIcon" />
      <EyeTagIconContain src={eyeTagIcon} alt="eyeTagIcon" />
      <NavLinkContain onClick={ScrollTop} to="/main">
        <FirstNavLinkText>{t("startMenu")}</FirstNavLinkText>
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
            onClick={() => changeLanguage("en")}
          >
            EN
          </MenuItem>
          <MenuItem
            value={10}
            style={{
              fontWeight: 600,
            }}
            onClick={() => changeLanguage("ko")}
          >
            한국어
          </MenuItem>
          <MenuItem
            value={20}
            style={{
              fontWeight: 600,
            }}
            onClick={() => changeLanguage("jp")}
          >
            日本語
          </MenuItem>
          <MenuItem
            value={30}
            style={{
              fontWeight: 600,
            }}
            onClick={() => changeLanguage("ch")}
          >
            中文
          </MenuItem>
        </Select>
      </DropdownContain>
    </Contain>
  );
};

export default MainNavBar;
