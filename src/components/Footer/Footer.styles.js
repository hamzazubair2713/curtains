import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: var(--success);
  padding: 50px 0;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  .footer-title-wrap {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;
    @media (max-width: 900px) {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }
  .footer-title {
    font-size: 40px;
    line-height: 50px;
    font-weight: 500;
    @media (max-width: 900px) {
      font-size: 28px;
      line-height: 32px;
    }
  }
  .footer-main-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 20px;
    }
    .company-detail {
      max-width: 415px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      .logowrap {
        max-width: 172px;
        margin-bottom: 15px;
        @media (max-width: 768px) {
          max-width: 120px;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
    .footer-links-wrap {
      max-width: 550px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      @media (max-width: 900px) {
        max-width: 100%;
      }
      @media (max-width: 576px) {
        flex-direction: column;
        gap: 10px;
      }
      .title {
        display: block;
        margin-bottom: 20px;
        font-size: 22px;
        line-height: 26px;
        font-weight: 600;
        text-transform: uppercase;
        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .footer-links {
        li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        a,
        address {
          color: var(--white);
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
          font-style: normal;
        }
        address {
          max-width: 237px;
        }
      }
    }
  }
  hr {
    border: 1px solid #527878;
    margin-bottom: 15px;
  }
  .legal {
    position: relative;
    color: #bad0d0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 10px;
    }
    @media (max-width: 576px) {
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      flex-direction: column-reverse;
    }
  }
  .legal-links {
    max-width: 350px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: #bad0d0;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      @media (max-width: 576px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;
