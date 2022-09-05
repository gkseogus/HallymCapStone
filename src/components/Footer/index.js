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
  height: 38px;
  margin-left: 60px;
  display: flex;
`;

const FooterTeamText = styled.p`
  color: white;
  font-size: 32px;
  font-weight: 600;
`;

const PositonText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-left: 30px;
  margin-top: 60px;
`;

const NameText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
  margin-top: 60px;
`;

const CopyrightText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-left: 35%;
  margin-top: 60px;
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
