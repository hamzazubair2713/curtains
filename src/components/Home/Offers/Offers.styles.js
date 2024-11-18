import styled from "styled-components";

export const StyledOffers = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  .sub-heading {
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    display: block;
    margin-bottom: 20px;
    color: var(--body-text-50);
  }
  h3 {
    font-size: 48px;
    font-weight: 600;
    line-height: 52px;
    text-align: left;
    color: var(--body-text-50);
  }
  .twoCol {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
    .whatoffer-imagetext {
      max-width: 550px;

      p {
        margin-bottom: 20px;
      }
      .image-wrap {
        max-width: 550px;
      }
    }
  }
  .offer-col {
    max-width: 620px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin-bottom: 30px;
    }
  }
  .csr-text {
    max-width: 611px;
    width: 100%;
  }
  .col-image-wrap {
    max-width: 617px;
    width: 100%;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
