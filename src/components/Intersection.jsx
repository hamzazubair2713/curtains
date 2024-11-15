import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

export const InterSectionWrapper = styled.div`
  display: ${({ $opacity }) => ($opacity ? " " : "none")};
  opacity: ${({ $opacity }) => ($opacity ? "1" : "0")};
  visibility: ${({ $opacity }) => ($opacity ? "visible" : "hidden")};

  transition: all 0.3s ease-in-out;
`;

const Intersection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 2) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <InterSectionWrapper $opacity={isVisible}>{children}</InterSectionWrapper>
  );
};

export default Intersection;
