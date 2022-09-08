import React from "react";
import styled from "styled-components";

const Contain = styled.footer`
  width: 100vw;
  height: 120px;
  background-color: #444444;
  position: relative;
  bottom: 0;
`;

const TextContain = styled.div`
  height: 33px;
  margin-left: 60px;
  display: flex;
`;

const FooterTeamText = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  margin-top: 34px;
`;

const PositonText = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 60px;
  font-family: "Noto Sans CJK KR";
`;

const NameText = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
  margin-top: 60px;
  display: flex;
  font-family: "Noto Sans CJK KR";
`;

const CopyrightText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  margin-left: 35%;
  margin-top: 56px;
  font-family: "Noto Sans CJK KR";
`;

const Footer = () => {
  return (
    <Contain>
      <TextContain>
        <FooterTeamText>Eye Tag</FooterTeamText>
        <PositonText>Dev</PositonText>
        <NameText>Daehyeon Han</NameText>
        <PositonText>Dev</PositonText>
        <NameText>Dohyeon Kim</NameText>
        <PositonText>AI</PositonText>
        <NameText>Eunseo Jeon</NameText>
        <PositonText>UX/UI</PositonText>
        <NameText>Minjin Kim</NameText>
        <PositonText>PM</PositonText>
        <NameText>Seungwon Bang</NameText>
        <CopyrightText>©Copyright 2022</CopyrightText>
      </TextContain>
    </Contain>
  );
};

export default Footer;
