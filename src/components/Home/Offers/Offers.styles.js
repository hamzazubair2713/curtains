import styled from "styled-components";

export const StyledOffers = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 20px;
  }

  .sub-heading {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    text-align: left;
    display: block;
    margin-bottom: 8px;
    color: var(--body-text-50);
    @media (min-width: 992px) {
      margin-bottom: 20px;
      font-size: 22px;
      line-height: 26px;
    }
    @media (min-width: 1300px) {
      font-size: 28px;
      line-height: 32px;
    }
  }
  h3 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    text-align: left;
    color: var(--body-text-50);
    margin-bottom: 8px;

    @media (min-width: 768px) {
      margin-bottom: 15px;
      font-size: 32px;
      line-height: 36px;
    }
    @media (min-width: 1024px) {
      font-size: 38px;
      line-height: 42px;
    }
    @media (min-width: 1300px) {
      font-size: 48px;
      line-height: 52px;
    }
  }
  .twoCol {
    width: 100%;
    margin-bottom: 50px;
    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .whatoffer-imagetext {
      max-width: 550px;
      margin: 0 auto 20px;

      @media (min-width: 992px) {
        margin: 0;
      }
      p {
        margin-bottom: 20px;
      }
      .image-wrap {
        max-width: 550px;
      }
    }
  }
  .row-reverse {
    order: 2;
  }
  .offer-col {
    margin-bottom: 15px;

    @media (min-width: 992px) {
      max-width: 620px;
      margin-bottom: 30px;
    }
  }
  .csr-text {
    max-width: 611px;
    width: 100%;
    @media (max-width: 992px) {
      margin: 0 auto 20px;
    }
  }
  .col-image-wrap {
    max-width: 617px;
    width: 100%;
    @media (max-width: 992px) {
      margin: 0 auto 20px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
