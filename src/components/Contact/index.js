import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import githubLogo from "../../GitHub.svg";
import gmailLogo from "../../Gmail.svg";

const Wrap = styled.div`
    position: relative;
    width: 1194px;
    height: 1400px;
    left: 50%;
    margin-left: -597px;

    background: #EEEEEE;
`;

const PeopleWrap1 = styled.div`
    position: relative;
    display:flex;
`;
const PeopleWrap2 = styled.div`
    position: relative;
    display:flex;
`;
const People1 = styled.div`
    position: relative;
    width: 234px;
    height: 315px;
    left: 333px;
    top: 150px;
`;

const People2 = styled.div`
    position: relative;
    width: 234px;
    height: 315px;
    left: 359px;
    top: 150px;
`;

const People3 = styled.div`
    position: absolute;
    width: 234px;
    height: 315px;
    left: 203px;
    top: 230px;
`;

const People4 = styled.div`
    position: absolute;
    width: 234px;
    height: 315px;
    left: 463px;
    top: 230px;
`;

const People5 = styled.div`
    position: absolute;
    width: 234px;
    height: 315px;
    left: 723px;
    top: 230px;
`;

const Position1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 10px;

    position: absolute;
    left: 0%;
    right: 55.56%;
    top: 5.71%;
    bottom: 82.54%;
    z-index:1;
    background: #444444;
    border-radius: 30px;
`;

const Position1P = styled.p`
    width: 72px;
    height: 21px;
    margin:0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
    z-index:2;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;   
`;

const Img1 = styled.div`
    position: absolute;
    width:200px;
    height:200px;
    border-radius:100%;
    left: 14.53%;
    right: 0%;
    top: 0%;
    bottom: 36.51%;
    background-color:rgb(211,211,211);
`;

const NameWrap1 = styled.div`
    position: absolute;
    left: 16.31%;
    right: 29.49%;
    top: 69.84%;
    bottom: 0%;
`;

const Name1 = styled.p`
    position: absolute;
    width: 155px;
    height: 24px;
    left: 18px;
    bottom: 71px;
    margin:0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    text-align: center;

    color: #000000;
`;

const EmailWrap1 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 4.47px;

position: absolute;
width: 58.37px;
height: 17.89px;
left: 3px;
top: 39px;

`;
const Email1 = styled.p`
    width: 36px;
    height: 17px;
    margin:0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14.3158px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #999999;
`;
const GithubWrap1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 4.47px;
    text-align: center;

    margin:0;
    position: absolute;
    width: 68.37px;
    height: 17.89px;
    left: 2px;
    top: 64.05px;
`;

const Github1 = styled.p`
    width: 46px;
    height: 17px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 14.3158px;
    line-height: 17px;
    margin: 0;
    /* identical to box height */

    text-align: center;

    color: #999999;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    `;

const Form = styled.form`
    position:relatvie;
    bottom:0;
    margin-top: 600px;
`;

const FormTitle = styled.p`
    position: absolute;
    width: 311px;
    height: 48px;
    left: 445px;
    top: 890px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    text-align: center;

    color: #000000;
`;

const FormMyEmail = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;

    position: absolute;
    width: 210px;
    height: 29px;
    left: 492px;
    top: 1030px;
    text-align: center;
    background-color: #EEEEEE;
    border: none;
    border-bottom: 3px solid black;
    ::placeholder{
        color:#999999;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }
`;

const FormDevEmail = styled.select`
    position: absolute;
    width: 280px;
    height: 35px;
    left: 457px;
    top: 1100px;
    text-align: center;
    background-color: #EEEEEE;
    border: none;
    border-bottom: 3px solid black;
    color : #999999;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 10px;
    `;

const FormContent = styled.textarea`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    position: absolute;
    width: 300px;
    height: 29px;
    left: 447px;
    top: 1170px;
    text-align: center;
    overflow-y: hidden;
    resize: none;
    background-color: #EEEEEE;
    border: none;
    border-bottom: 3px solid black;
    max-height: 66px;
    ::placeholder{
        color:#999999;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }
`;

const FormBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 30px;
    gap: 10px;

    position: absolute;
    width: 109px;
    height: 48px;
    left: 543px;
    top: 1265px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    
    text-align: center;
    
    color: #FFFFFF;
    
    background: #444444;
    border-radius: 30px;
    &:hover{
        cursor:pointer;
    }
`;

const FormBtnContent = styled.p`
    margin-top: -3px;
`;
const Contact = () => {

    const [Selected, setSelected] = useState("");
    var docUrl = "https://script.google.com/macros/s/AKfycbwC_QoWQhudZCirMHW8cD9gGhVqFgJfSSVKAagCiNR8lhOCzanA_vtiYCZMHlFxI-L7/exec";

    const textRef = useRef();
    const handleResizeHeight = useCallback(() =>{
        textRef.current.style.height = textRef.current.scrollHeight + "px";
    }, []);


    const selectList = ["rlaehgusqp@naver.com", "fbznffldj998@naver.com", "moonb1504@gmail.com", "jeuns1108@gmail.com", "tmddnjs513@naver.com"];
    const docsList = ["https://script.google.com/macros/s/AKfycbwC_QoWQhudZCirMHW8cD9gGhVqFgJfSSVKAagCiNR8lhOCzanA_vtiYCZMHlFxI-L7/exec"
        , "https://script.google.com/macros/s/AKfycbzB5tTNPkXTmCKt3Sff2B6XrNF1v1AQKO1gBlXgTs7TjY4iNwO_ZyATWbBrEC1Yx4hR/exec"
        , "https://script.google.com/macros/s/AKfycbxgWGVgrW4YOsGrrHQo7JJ6ofbnwxjFX1xgrdukwyThQnu_OGS7spXS0JsOA91xdPDu/exec"
        , "https://script.google.com/macros/s/AKfycbyXa4Yrp2A2pb2gMnR1b9xYIRG2MnkxRKyH4jCz2Ruz1PUCnV7MoBrS4BVffKJjVNthfA/exec"
        , "https://script.google.com/macros/s/AKfycbwdepghXyWZt875TsgMXJmPlM1zckVKjuZdEtiBr8wLNRgOOW-k06W1vVAkNCa-YyUr/exec"];

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return(
        <Wrap>
            <PeopleWrap1>
                <People1>
                    <Position1>
                        <Position1P>FE</Position1P>
                    </Position1>
                    <Img1 />
                    <NameWrap1>
                        <Name1>Daehyeon Han</Name1>
                        <EmailWrap1>
                            <img src={gmailLogo} />
                            <Email1>fbznffldj998@naver.com</Email1>
                        </EmailWrap1>
                        <GithubWrap1>
                            <img src={githubLogo} />
                            <Github1>github.com/gkseogus</Github1>
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
                            <img src={gmailLogo} />
                            <Email1>rlaehgusqp@naver.com</Email1>
                        </EmailWrap1>
                        <GithubWrap1>
                            <img src={githubLogo} />
                            <Github1>github.com/doggang</Github1>
                        </GithubWrap1>
                    </NameWrap1>
                </People2>
            </PeopleWrap1>
            
            <PeopleWrap2>
                <People3>
                    <Position1>
                        <Position1P>AI</Position1P>
                    </Position1>
                    <Img1 />
                    <NameWrap1>
                        <Name1>Eunseo Jeon</Name1>
                        <EmailWrap1>
                            <img src={gmailLogo} />
                            <Email1>jeuns1108@gmail.com</Email1>
                        </EmailWrap1>
                        <GithubWrap1>
                            <img src={githubLogo} />
                            <Github1>github.com/jeonuenseo</Github1>
                        </GithubWrap1>
                    </NameWrap1>
                </People3>
                
                <People4>
                    <Position1>
                        <Position1P>UX/UI</Position1P>
                    </Position1>
                    <Img1 />
                    <NameWrap1>
                        <Name1>Minjin Kim</Name1>
                        <EmailWrap1>
                            <img src={gmailLogo} />
                            <Email1>moonb1504@gmail.com</Email1>
                        </EmailWrap1>
                        <GithubWrap1>
                            <img src={githubLogo} />
                            <Github1>github.com/Miinjin</Github1>
                        </GithubWrap1>
                    </NameWrap1>
                </People4>

                <People5>
                    <Position1>
                        <Position1P>PM</Position1P>
                    </Position1>
                    <Img1 />
                    <NameWrap1>
                        <Name1>Seungwon Bang</Name1>
                        <EmailWrap1>
                            <img src={gmailLogo} />
                            <Email1>tmddnjs513@naver.com</Email1>
                        </EmailWrap1>
                        <GithubWrap1>
                            <img src={githubLogo} />
                            <Github1>github.com/seungwonB</Github1>
                        </GithubWrap1>
                    </NameWrap1>
                </People5>
            </PeopleWrap2>
            {
                Selected=="rlaehgusqp@naver.com"
                ? docUrl=docsList[0]
                : (Selected=="fbznffldj998@naver.com")
                    ? docUrl=docsList[1]
                    : (Selected=="moonb1504@gmail.com")
                        ? docUrl=docsList[2]
                        : (Selected=="jeuns1108@gmail.com")
                            ? docUrl=docsList[3]
                            : (Selected=="tmddnjs513@naver.com")
                                ? docUrl=docsList[4]
                                : console.log("")

            }
            <Form method="post" action={docUrl}>
                <FormTitle>Send a Message</FormTitle>
                <div>
                    <div>
                        <FormMyEmail type="email" id="email" name="email" placeholder="Your e-mail address" />
                    </div>
                    <div>
                        <FormDevEmail type="text" id="usr" name="username" placeholder="Select an address to send to" onChange={handleSelect} value={Selected}>
                            <option>Select an address to send to</option>
                            {
                                selectList.map((item) => (
                                    <option value={item} key={item}>
                                    {item}
                                    </option>
                                ))
                            }
                        </FormDevEmail>
                    </div>
                </div>

                <div>
                    <FormContent rows="5" id="comment" name="message" placeholder="Write a message what you want" ref={textRef} onInput={handleResizeHeight}></FormContent>
                </div>
                <FormBtn type="submit">
                    <FormBtnContent>Send</FormBtnContent>
                </FormBtn>
            </Form>

        </Wrap>
    );
};

export default Contact;