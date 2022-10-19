import React, { useCallback, useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import githubLogo from "../../../githublogo.svg";
import gmailLogo from "../../../mail.svg";
import copyLogo from "../../../copy.svg";
import linkLogo from "../../../link.svg";

const PeopleWrap = styled.div`
  position: relative;
  width: 1194px;
  height: 870px;
  margin: auto;
`;

const PeopleWrap1 = styled.div`
  position: relative;
  width: 1194px;
  height: 430px;
  display: flex;
`;
const PeopleWrap2 = styled.div`
  position: relative;
  width: 1194px;
  display: flex;
`;
const People1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 31px;
  gap: 30px;

  width: 160px;
  height: 300px;
  left: 50%;
  margin-left: calc(-237px);
  top: 120px;
`;

const People2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 31px;
  gap: 30px;

  width: 160px;
  height: 300px;
  left: 50%;
  margin-left: calc(-111px + 141px);
  top: 120px;
`;

const People3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 31px;
  gap: 30px;

  width: 160px;
  height: 300px;
  left: 50%;
  margin-left: calc(-363px);

  top: 60px;
`;

const People4 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 31px;
  gap: 30px;

  width: 160px;
  height: 300px;
  left: 50%;
  margin-left: calc(30px);

  top: 60px;
`;

const People5 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 31px;
  gap: 30px;

  width: 160px;
  height: 300px;
  left: 50%;
  margin-left: calc(-111px + 141px);

  top: 60px;
`;

const Position1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  position: absolute;
  height: 35px;

  background: #10bc7e;
  border-radius: 100px;
  z-index: 3;
  left: 0;
  top: 20px;
`;

const Position3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  position: absolute;
  height: 35px;

  background: #1a73e8;
  border-radius: 100px;
  z-index: 3;
  left: 0;
  top: 20px;
`;

const Position4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  position: absolute;
  height: 35px;

  background: #f6c667;
  border-radius: 100px;
  z-index: 3;
  left: 0;
  top: 20px;
`;

const Position5 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  position: absolute;
  height: 35px;

  background: #9567f6;
  border-radius: 100px;
  z-index: 3;
  left: 0;
  top: 20px;
`;

const Position1P = styled.p`
  width: 72px;
  height: 21px;
  margin: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 35px;
  text-align: center;

  color: #ffffff;
  z-index: 2;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Img1 = styled.div`
  width: 170px;
  height: 170px;
  position: absolute;
  top: 10px;
  /* Inside auto layout */
  border-radius: 100px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: rgb(211, 211, 211);
`;

const NameWrap1 = styled.div`
  position: absolute;
  bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 20px;

  width: 100%;
  height: 100px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Name1 = styled.p`
  position: absolute;
  width: 164px;
  height: 30px;

  margin: auto;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;

  color: #202124;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  left: 30px;
  top: 0;
`;

const EmailWrap1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 211px;
  height: 21px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  left: 0px;
  top: 50px;
`;
const Email1Logo = styled.img`
  width: 18px;
  height: 14.4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Email1CopyLogo = styled.img`
  width: 12px;
  height: 12px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Email1 = styled.p`
  height: 21px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #202124;
  &:hover {
    cursor: pointer;
  }

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0;
`;
const GithubLogo = styled.img`
  width: 18px;
  height: 17.56px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Email1LinkLogo = styled.img`
  position: relative;
  bottom: 3px;
  width: 12px;
  height: 11.99px;
  left: 2px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
const GithubWrap1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4.47px;
  text-align: center;

  margin: 0;
  position: absolute;
  width: 68.37px;
  height: 17.89px;
  left: 68px;
  top: 80.05px;
`;

const Github1 = styled.p`
  position: relative;
  left: 1px;
  top: 14px;
  width: 44px;
  height: 21px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;

  color: #202124;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  &:hover {
    cursor: pointer;
  }
`;

const ContactProfile = () => {
  const email = [
    "fbznffldj998@naver.com",
    "rlaehgusqp@naver.com",
    "jeuns1108@gmail.com",
    "moonb1504@gmail.com",
    "tmddnjs513@naver.com",
  ];
  return (
    <PeopleWrap>
      <PeopleWrap1>
        <People1>
          <Position1>
            <Position1P>FE</Position1P>
          </Position1>
          <Img1 />
          <NameWrap1>
            <Name1>Daehyeon Han</Name1>
            <EmailWrap1>
              <Email1Logo src={gmailLogo} />
              <CopyToClipboard
                text={email[0]}
                onCopy={() => alert("주소가 복사되었습니다")}
              >
                <Email1 className="URL">{email[0]}</Email1>
              </CopyToClipboard>
              <Email1CopyLogo src={copyLogo} />
            </EmailWrap1>
            <GithubWrap1>
              <GithubLogo src={githubLogo} />
              <Github1
                onClick={() =>
                  window.open("https://github.com/gkseogus", "_blank")
                }
              >
                github
              </Github1>
              <Email1LinkLogo src={linkLogo} />
            </GithubWrap1>
          </NameWrap1>
        </People1>

        <People2>
          <Position1>
            <Position1P>FE</Position1P>
          </Position1>
          <Img1 />
          <NameWrap1>
            <Name1>Dohyun Kim</Name1>
            <EmailWrap1>
              <Email1Logo src={gmailLogo} />
              <CopyToClipboard
                text={email[1]}
                onCopy={() => alert("주소가 복사되었습니다")}
              >
                <Email1 className="URL">{email[1]}</Email1>
              </CopyToClipboard>
              <Email1CopyLogo src={copyLogo} />
            </EmailWrap1>
            <GithubWrap1>
              <GithubLogo src={githubLogo} />
              <Github1
                onClick={() =>
                  window.open("https://github.com/doggang", "_blank")
                }
              >
                github
              </Github1>
              <Email1LinkLogo src={linkLogo} />
            </GithubWrap1>
          </NameWrap1>
        </People2>
      </PeopleWrap1>

      <PeopleWrap2>
        <People3>
          <Position3>
            <Position1P>AI</Position1P>
          </Position3>
          <Img1 />
          <NameWrap1>
            <Name1>Eunseo Jeon</Name1>
            <EmailWrap1>
              <Email1Logo src={gmailLogo} />
              <CopyToClipboard
                text={email[2]}
                onCopy={() => alert("주소가 복사되었습니다")}
              >
                <Email1 className="URL">{email[2]}</Email1>
              </CopyToClipboard>
              <Email1CopyLogo src={copyLogo} />
            </EmailWrap1>
            <GithubWrap1>
              <GithubLogo src={githubLogo} />
              <Github1
                onClick={() =>
                  window.open("https://github.com/jeonuenseo", "_blank")
                }
              >
                github
              </Github1>
              <Email1LinkLogo src={linkLogo} />
            </GithubWrap1>
          </NameWrap1>
        </People3>

        <People4>
          <Position4>
            <Position1P>UX/UI</Position1P>
          </Position4>
          <Img1 />
          <NameWrap1>
            <Name1>Minjin Kim</Name1>
            <EmailWrap1>
              <Email1Logo src={gmailLogo} />
              <CopyToClipboard
                text={email[3]}
                onCopy={() => alert("주소가 복사되었습니다")}
              >
                <Email1 className="URL">{email[3]}</Email1>
              </CopyToClipboard>
              <Email1CopyLogo src={copyLogo} />
            </EmailWrap1>
            <GithubWrap1>
              <GithubLogo src={githubLogo} />
              <Github1
                onClick={() =>
                  window.open("https://github.com/Miinjin", "_blank")
                }
              >
                github
              </Github1>
              <Email1LinkLogo src={linkLogo} />
            </GithubWrap1>
          </NameWrap1>
        </People4>

        <People5>
          <Position5>
            <Position1P>PM</Position1P>
          </Position5>
          <Img1 />
          <NameWrap1>
            <Name1>Seungwon Bang</Name1>
            <EmailWrap1>
              <Email1Logo src={gmailLogo} />
              <CopyToClipboard
                text={email[4]}
                onCopy={() => alert("주소가 복사되었습니다")}
              >
                <Email1 className="URL">{email[4]}</Email1>
              </CopyToClipboard>
              <Email1CopyLogo src={copyLogo} />
            </EmailWrap1>
            <GithubWrap1>
              <GithubLogo src={githubLogo} />
              <Github1
                onClick={() =>
                  window.open("https://github.com/seungwonB", "_blank")
                }
              >
                github
              </Github1>
              <Email1LinkLogo src={linkLogo} />
            </GithubWrap1>
          </NameWrap1>
        </People5>
      </PeopleWrap2>
    </PeopleWrap>
  );
};

export default ContactProfile;
