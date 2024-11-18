import React from "react";
import styled from "styled-components";
import sliderImage from "../../../../public/assets/images/sliderImage.svg";
import Image from "next/image";
export const HomeSliderStyled = styled.div`
  background: #f6fafa;
  padding: 40px 0;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  .container2 {
    display: flex;
    max-width: 2100px;
    margin: 0 auto;
    overflow: hidden;
    gap: 20px;
  }
  .col {
    max-width: 100px;
    flex-shrink: 0;
    @media (min-width: 768px) {
      max-width: 169px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .ul {
    width: 100%;
    display: flex;
    gap: 20px;
    min-width: 100%;
    animation: scroll-x 60s linear infinite;
    list-style: none;
    animation-play-state: running;
  }
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100%));
    }
  }
`;
const HomeSlider = () => {
  const cards = Array.from({ length: 35 });
  return (
    <HomeSliderStyled>
      <div className="container2">
        <div className="ul">
          {cards.map((elem, ind) => (
            <div className="col" key={ind}>
              <Image src={sliderImage} alt="sliderImage" width={169} />
            </div>
          ))}
        </div>
      </div>
    </HomeSliderStyled>
  );
};

export default HomeSlider;
