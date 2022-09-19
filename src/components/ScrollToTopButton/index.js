import React, { useState } from "react";
import styled from "styled-components";
import upScroll from "./IMG/upScroll.png";

const ScrollToTop = styled.div`
  position: fixed;
  width: 61%;
  left: 45%;
  bottom: 70px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
`;

const ScrollIconImg = styled.img``;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <aside>
      <ScrollToTop>
        <ScrollIconImg
          src={upScroll}
          alt="upScroll"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        ></ScrollIconImg>
      </ScrollToTop>
    </aside>
  );
};

export default ScrollToTopButton;
