import styled from "styled-components";

export const StyledAboutProduct = styled.div`
  h2 {
    font-size: 30px;
    line-height: 34px;
    font-weight: 600;
    text-align: left;
    color: var(--body-text-50);
    margin-bottom: 35px;
    @media (max-width: 992px) {
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  .twocol {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
    .col {
      width: 50%;
      @media (max-width: 992px) {
        margin: 0 auto;
        text-align: center;
      }
      .image-wrapper {
        max-width: 550px;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .product-image {
      @media (max-width: 992px) {
        margin: 0 auto;
      }
    }
    .desc {
      max-width: 592px;
      width: 100%;
      font-size: 18px;
      line-height: 27px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
      p {
        margin-bottom: 40px;
        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
      }
    }
  }
  ul {
    text-align: left;
    list-style: disc;
    padding-left: 25px;
    strong {
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      text-align: left;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    li {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 24px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    @media (max-width: 768px) {
      padding-left: 15px;
    }
  }
  .container {
    margin: 20px auto 0;
    @media (min-width: 992px) {
      margin: 50px auto 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .why-purchase {
    color: var(--white);
    background: linear-gradient(85.8deg, #ba8452 0%, #254d4d 100%);
    margin-bottom: 20px;
    padding: 20px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;

    @media (min-width: 992px) {
      margin-bottom: 50px;
      padding: 50px 0;
    }
    h3 {
      max-width: 404px;
      color: var(--white);
      font-size: 22px;
      line-height: 26px;
      font-weight: 600;
      margin-bottom: 30px;
      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 28px;
      }
      @media (min-width: 992px) {
        font-size: 30px;
        line-height: 34px;
      }
    }
    .text {
      max-width: 513px;
      width: 100%;
    }
    .image-wraper {
      max-width: 561px;
      width: 100%;
    }
  }
`;
