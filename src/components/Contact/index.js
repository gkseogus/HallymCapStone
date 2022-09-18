import React from "react";
import styled from "styled-components";
import ContactProfile from "./ContactProfile"
import ContactSend from "./ContactSend";

const Wrap = styled.div`
    position: relative;
    width: 100%;
    height: 1500px;
    margin-top : 80px;
`;

const Contact = () => {
  return (
    <Wrap>
      <ContactProfile />
      <ContactSend />
    </Wrap>
  );
}

export default Contact;
