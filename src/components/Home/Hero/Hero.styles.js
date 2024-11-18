import styled from "styled-components";
import bg from "../../../../public/assets/images/line_bg.png";
export const StyledHero = styled.div`
  background: url(${bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 450px;

  h1 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    text-align: center;
    color: #153736;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 30px;
    }
    @media (min-width: 992px) {
      font-size: 50px;
      line-height: 54px;
    }
    @media (min-width: 1220px) {
      font-size: 72px;
      line-height: 76px;
    }
  }
  .text-wrap {
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 70px 0 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;

    p {
      margin-bottom: 20px;

      @media (min-width: 992px) {
        margin-bottom: 40px;
      }
    }
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (min-width: 992px) {
      margin-bottom: 0;
    }
    @media (min-width: 1220px) {
      max-width: 840px;
      font-size: 20px;
      line-height: 36px;
    }
  }
  .imag-wrap {
    max-width: 2160px;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 992px) {
      margin: -50px auto 0;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
