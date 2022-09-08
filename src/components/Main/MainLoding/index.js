import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import styled from "styled-components";
import Spinner from "../Img/spinner.png";

const Contain = styled.div`
  display: flex;
  position: absolute;
  width: 269px;
  height: 253px;
  background-color: none;
  transform: translate(-50%, -50%);
`;

const LoadingText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: #999999;
`;

const SpinnerContain = styled.img`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

const LoadingSubText = styled.p`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #999999;
`;

const MainLoding = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <Contain>
      {promiseInProgress && <LoadingText>Loading...</LoadingText>}
      {promiseInProgress && (
        <SpinnerContain src={Spinner} alt="spinner img"></SpinnerContain>
      )}
      {promiseInProgress && (
        <LoadingSubText>It takes about a few minutes</LoadingSubText>
      )}
    </Contain>
  );
};

export default MainLoding;
