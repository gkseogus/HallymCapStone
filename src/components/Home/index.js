import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Slider2 from "react-slick";
import "../../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeImg1 from "../../wolf.svg";
import HomeImg2 from "../../eye.svg";
import HomeImg3 from "../../people.svg";

import HomeImg2_1 from "../../man.svg";
import HomeImg2_2 from "../../girl.svg";
import HomeImg2_3 from "../../phone.svg";

import HomeImg3_1 from "../../eyes.svg";
import HomeImg3_2 from "../../input.svg";
import HomeImg3_3 from "../../graph.svg";
import HomeImg3_4 from "../../whkvy.svg";

import leftBtn from "../../leftBtn.svg";
import rightBtn from "../../rightBtn.svg";

const Home1 = styled.div`
  position: relative;
  width: 1194px;
  height: 840px;
  margin-top: 80px;
  left: 50%;
  margin-left: -597px;
  background-color: #eeeeee;
`;

const Home1P1 = styled.div`
  position: absolute;
  text-align: left;
  width: 900px;
  left: 8.38%;
  right: 31.83%;
  top: 10.71%;
  bottom: 76.9%;
  white-space: pre-line;

  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  /* or 144% */

  color: #000000;
`;

const Home1P2 = styled.div`
  position: absolute;
  left: 8.38%;
  right: 38.86%;
  top: 25.24%;
  width: 1000px;
  bottom: 70.48%;
  text-align: left;
  font-family: "notoReg";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: #000000;
`;

const NavStartBtn = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;

  position: absolute;
  width: 205px;
  height: 65px;

  left: 8.3%;
  bottom: 7.14%;

  background: #1a73e8;
  box-shadow: 3px 5px 10px rgba(26, 115, 232, 0.15);
  border-radius: 100px;

  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    background-color: #1250a2;
    transition-duration: 0.17s;
  }
`;

const Home2 = styled.div`
  position: relative;
  width: 1194px;
  height: 793px;
  left: 50%;
  margin-left: -597px;
`;

const Home2P1 = styled.p`
  position: absolute;
  width: 450px;
  height: 76px;
  top: 100px;
  left: 50%;
  margin: 0;
  margin-left: -225px;

  text-align: center;
  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #000000;
`;

const Home2Div1 = styled.iframe`
  position: relative;
  width: 846px;
  height: 480px;
  top: 25%;

  background-color: gray;
`;

const Home3 = styled.div`
  position: relative;
  width: 1194px;
  height: 869px;
  left: 50%;
  margin-left: -597px;
  background: #ffffff;
`;

const Home3Gra = styled.div`
  position: relative;
  width: 869px;
  height: 15px;
  left: -428px;
  top: 423px;
  background: linear-gradient(
    90deg,
    rgba(6, 135, 232, 0) 0%,
    #0687e8 25%,
    #0687e8 72.92%,
    rgba(6, 135, 232, 0) 100%
  );
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
`;

const Home3Img = styled.img`
  position: relative;
  background-color: rgb(199, 199, 199);
`;

const Home3P1 = styled.div`
  position: absolute;
  width: 442px;
  height: 62px;
  left: 50%;
  margin-left: -221px;
  top: 90px;

  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 62px;
  text-align: center;

  color: #000000;
`;

const Slider2P1 = styled.p`
  width: 59px;
  height: 27px;

  font-family: "notoMed";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Slider2P2 = styled.p`
  padding-top: 14px;
  width: 400px;
  height: 53px;

  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Slider2P3 = styled.p`
  width: 448px;
  height: 144px;
  white-space: pre-line;

  padding-top: 36px;
  font-family: "notoMed";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 36px;

  color: #202124;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Home4 = styled.div`
  position: relative;
  width: 1194px;
  height: 2620px;
  background-color: white;
  left: 50%;
  margin-left: -597px;
`;

const Home4P1 = styled.p`
  left: 76px;
  top: 66px;
  text-align: left;
  position: absolute;
  width: 422px;
  height: 59px;

  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 59px;

  color: #000000;
`;
const Home4Img1 = styled.img`
  position: absolute;
  width: 562px;
  height: 644px;
  left: 38px;
  top: 203px;
`;
const Home4P2 = styled.p`
  position: absolute;
  left: 637px;
  top: 230px;
  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 40px;
  gap: 10px;

  position: absolute;
  width: 351px;
  height: 51px;

  background: #1a73e8;
  color: white;
  border-radius: 20px;
  margin: 0;
`;
const Home4P3 = styled.p`
  position: absolute;
  left: 642px;
  top: 300px;

  width: 419px;
  height: 407px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: start;
`;
const Home4P4 = styled.p`
  position: absolute;
  width: 343px;
  height: 50px;
  left: 72px;
  top: 923px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0px;
  gap: 10px;

  font-family: "notoBold";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 50px;

  background: #1a73e8;
  border-radius: 20px;
  color: white;
`;
const Home4Img2 = styled.img`
  position: absolute;
  width: 1098px;
  height: 460.1px;
  left: 45px;
  top: 1070px;
`;
const Home4P5 = styled.p`
  position: absolute;
  left: 72px;
  top: 1510px;

  width: 1050px;
  height: 216px;
  text-align: start;
  font-family: "notoReg";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;

  color: #000000;
`;

const Home4Img3 = styled.img`
  position: absolute;
  width: 1030px;
  height: 455px;
  left: -188px;
  top: 1670px;
`;
const Home4Img4 = styled.img`
  position: absolute;
  width: 565px;
  height: 462px;
  left: 575px;
  top: 1666px;
`;

const Home4P6 = styled.p`
  position: absolute;
  width: 1050px;
  height: 166px;
  left: 72px;
  top: 2150px;

  text-align: start;

  font-family: "notoReg";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;

  color: #000000;
`;

const Home4P7 = styled.a`
  text-decoration: none;
  font-family: "notoMed";
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 47px;
  /* identical to box height */

  color: #000000;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;

  position: absolute;
  width: 432px;
  height: 47px;
  left: 75px;
  top: 2370px;

  background: #f6c667;
  border-radius: 15px;
  &:hover {
    background-color: #be994f;
    transition-duration: 0.17s;
  }
`;

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
  margin-left: -48px;
  margin-top: -36px;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
  margin-top: -36px;
  margin-right: -10px;
`;

const Home = () => {
  const { t } = useTranslation("");

  const settings = {
    draggable: false,
    fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const twoSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    nextArrow: (
      <NextTo>
        <img src={rightBtn} alt="rightBtn" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <img src={leftBtn} alt="leftBtn" />
      </Pre>
    ),
  };

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Home1>
        <div>
          <Slider {...settings}>
            <div>
              <img src={HomeImg1} style={{ opacity: "0.9" }} alt="homeImg" />
              <Home1P1>{t("bannerOne")}</Home1P1>
              <Home1P2>{t("bannerOneSub")}</Home1P2>
            </div>
            <div>
              <img src={HomeImg2} style={{ opacity: "0.7" }} alt="homeImg" />
              <Home1P1>{t("bannerTwo")}</Home1P1>
              <Home1P2>{t("bannerTwoSub")}</Home1P2>
            </div>
            <div>
              <img src={HomeImg3} style={{ opacity: "0.7" }} alt="homeImg" />
              <Home1P1>{t("bannerThree")}</Home1P1>
              <Home1P2>{t("bannerThreeSub")}</Home1P2>
            </div>
          </Slider>
        </div>
        <NavStartBtn onClick={ScrollTop} to="/main">
          {t("bannerButton")}
        </NavStartBtn>
      </Home1>
      <Home2>
        <Home2P1>{t("DemonstrationVideo")}</Home2P1>
        <Home2Div1
          src="https://www.youtube.com/embed/Le5cUlR-9G8"
          title="eyetag 시연영상"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Home2Div1>
      </Home2>
      <Home3>
        <Home3Gra />
        <Home3P1>{t("UserExamples")}</Home3P1>
        <Slider2
          {...twoSettings}
          style={{
            position: "relative",
            width: "1030px",
            height: "568px",
            left: "50%",
            marginLeft: "-515px",
            top: "212px",
            padding: "103px 92px",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <Home3Img src={HomeImg2_1} styled={{ marginLeft: "3px" }} />
            <div
              style={{
                position: "relative",
                width: "476px",
                height: "263px",
                top: "-350px",
                left: "400px",
              }}
            >
              <Slider2P1 style={{ textAlign: "left", margin: "0" }}>
                CASE 1
              </Slider2P1>
              <Slider2P2 style={{ textAlign: "left", margin: "0" }}>
                {t("Case1")}
              </Slider2P2>
              <Slider2P3 style={{ textAlign: "left", margin: "0" }}>
                {t("Case1two")}
              </Slider2P3>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Home3Img src={HomeImg2_2} styled={{ marginLeft: "3px" }} />
            <div
              style={{
                position: "relative",
                width: "476px",
                height: "263px",
                top: "-350px",
                left: "400px",
              }}
            >
              <Slider2P1 style={{ textAlign: "left", margin: "0" }}>
                CASE 2
              </Slider2P1>
              <Slider2P2 style={{ textAlign: "left", margin: "0" }}>
                {t("Case2")}
              </Slider2P2>
              <Slider2P3 style={{ textAlign: "left", margin: "0" }}>
                {t("Case2two")}
              </Slider2P3>
            </div>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Home3Img src={HomeImg2_3} />
            <div
              style={{
                position: "relative",
                width: "476px",
                height: "263px",
                top: "-350px",
                left: "400px",
              }}
            >
              <Slider2P1 style={{ textAlign: "left", margin: "0" }}>
                CASE 3
              </Slider2P1>
              <Slider2P2 style={{ textAlign: "left", margin: "0" }}>
                {t("Case3")}
              </Slider2P2>
              <Slider2P3 style={{ textAlign: "left", margin: "0" }}>
                {t("Case3two")}
              </Slider2P3>
            </div>
          </div>
        </Slider2>
      </Home3>
      <Home4>
        <Home4P1>{t("TechnicalDescription")}</Home4P1>
        <Home4Img1 src={HomeImg3_1}></Home4Img1>
        <Home4P2 style={{ textAlign: "center" }}>{t("TDtext1")}</Home4P2>
        <Home4P3>
          <p style={{ fontFamily: "notoReg", fontSize: "23px" }}>
            &nbsp;&nbsp;&nbsp;
            <span style={{ fontFamily: "notoMed", fontSize: "32px" }}>
              {t("TDtext2First")}
            </span>
            {t("TDtext2")}
          </p>
          <p style={{ fontFamily: "notoReg", fontSize: "23px" }}>
            &nbsp;&nbsp;&nbsp;
            <span style={{ fontFamily: "notoMed", fontSize: "32px" }}>
              {t("TDtext3First")}
            </span>
            {t("TDtext3")}
          </p>
          <p style={{ fontFamily: "notoReg", fontSize: "23px" }}>
            &nbsp;&nbsp;&nbsp;
            <span style={{ fontFamily: "notoMed", fontSize: "32px" }}>
              {t("TDtext4First")}
            </span>
            {t("TDtext4")}
          </p>
        </Home4P3>
        <Home4P4> {t("TDtext5")}</Home4P4>
        <Home4Img2 src={HomeImg3_2}></Home4Img2>
        <Home4P5>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontFamily: "notoMed", fontSize: "32px" }}>
            {t("TDtext6First")}
          </span>
          {t("TDtext6")}
        </Home4P5>
        <Home4Img3 src={HomeImg3_3}></Home4Img3>
        <Home4Img4 src={HomeImg3_4}></Home4Img4>
        <Home4P6>
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontFamily: "notoMed", fontSize: "32px" }}>
            {t("TDtext7First")}
          </span>
          {t("TDtext7")}
        </Home4P6>
        <Home4P7 href="https://gazecapture.csail.mit.edu/">
          {t("TDtext8")}
        </Home4P7>
      </Home4>
    </div>
  );
};

export default Home;
