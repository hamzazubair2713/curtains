import styled from "styled-components";

export const StyledHero = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  h1 {
    font-size: 35px;
    line-height: 39px;
    font-weight: 400;
    text-align: left;
    color: var(--body-text-50);
    @media (min-width: 992px) {
      font-size: 42px;
      line-height: 46px;
    }
  }
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
  .image-wraper {
    max-width: 534px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 768px) {
      margin: 0 auto;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .text-wrap {
    color: #9f9f9f;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    max-width: 650px;
    width: 100%;
    @media (max-width: 768px) {
      max-width: 100%;
    }
    .review {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 310px;
      width: 100%;
      gap: 10px;
      margin-bottom: 20px;
    }
    .rating {
      max-width: 124px;
      width: 100%;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 2px;
        top: -2px;
        bottom: -2px;
        background: #9f9f9f;
        right: -25px;
      }
    }
    .dec {
      max-width: 424px;
      width: 100%;
      color: var(--body-text-50);
      margin-bottom: 50px;
    }
    .product-detail {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 25px;
      @media (max-width: 576px) {
        flex-direction: column-reverse;
      }
      .sizes-main-wrap {
        margin-bottom: 15px;
        .title {
          display: block;
          margin-bottom: 8px;
        }
        .size-wraper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .size {
          padding: 5px;
          width: 30px;
          height: 30px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9f1e7;
          color: var(--body-text-50);
          font-size: 13px;
          user-select: none;
        }
        .active {
          background: #b88e2f;
          color: var(--white);
        }
        .color {
          width: 30px;
          height: 30px;
          border-radius: 30px;
        }
        .purple {
          background: #816dfa;
        }
        .black {
          background: var(--body-text-50);
        }
        .brown {
          background: #b88e2f;
        }
      }
    }
    .estimate {
      margin-top: 30px;
      border: 1px solid var(--black);
      color: var(--black);
      border-radius: 15px;
      width: 153px;
      padding: 10px;
      transition: 0.3s all ease-in-out;
      &:hover {
        background: var(--black);
        color: var(--white);
      }
      @media (max-width: 576px) {
        width: 100%;
        display: block;
      }
    }
    .col {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      .social-links-wrapper {
        max-width: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        color: var(--black);
        font-size: 20px;
      }
    }
    .name {
      display: flex;
      font-size: 16px;
      line-height: 20px;
      span {
        &:first-child {
          width: 90px;
        }
      }
    }
  }
`;
