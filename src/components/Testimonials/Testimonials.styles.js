import styled from "styled-components";
import bg from "../../../public/assets/images/line_bg.png";

export const StyledTestimonials = styled.div`
  background: url(${bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  margin-bottom: 50px;
  .slick-slide {
    padding: 10px 5px;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .text-wrap {
    max-width: 620px;
    margin: 0 auto;
    text-align: center;
    h2 {
      font-weight: 600;
      color: var(--body-text-50);
    }
  }
  .testimonial-card {
    max-width: 650px;
    width: 100%;
    margin: 100px auto 0;
    padding: 20px 30px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    .img-wrapper {
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: -90px auto 30px;
      background: var(--white);
      display: flex;
      align-items: center;
      overflow: hidden;
      @media (max-width: 992px) {
        width: 100px;
        height: 100px;
        margin: -70px auto 30px;
      }
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        @media (max-width: 992px) {
          width: 100px;
          height: 100px;
        }
      }
    }
    hr {
      display: block;
      margin: 0 -30px;
      border: 1px solid #eaeaea;
      margin-bottom: 20px;
    }
    .name {
      display: block;
      margin: 0 auto;
      text-align: center;
      font-size: 30px;
      line-height: 34px;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 28px;
      }
      @media (max-width: 576px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
    .designation {
      display: flex;
      align-items: flex-end;
      gap: 5px;
      justify-content: center;
      span {
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        color: var(--primary);
        &:last-child {
          font-weight: 400;
          color: var(--body-text);
        }
      }
    }
    .message {
      position: relative;
      max-width: 370px;
      width: 100%;
      margin: 0 auto 30px;
      padding: 0 10px;
      text-align: center;
      line-height: 30px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
      &::before {
        content: "“";
        font-size: 120px;
        color: #f1ad56;
        opacity: 0.4;
        font-family: serif;
        font-weight: bold;
        position: absolute;
        top: 1.8rem;
        left: -2rem;
        pointer-events: none;
      }
    }
  }
`;
