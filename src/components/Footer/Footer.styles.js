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
  }
  .footer-title {
    font-size: 40px;
    font-weight: 500;
    line-height: 50px;
  }
  .footer-main-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .company-detail {
      max-width: 415px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      .logowrap {
        max-width: 172px;
        margin-bottom: 15px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
    .footer-links-wrap {
      display: flex;
      gap: 40px;
      .title {
        display: block;
        margin-bottom: 20px;
        font-size: 22px;
        font-weight: 600;
        line-height: 26px;
        text-transform: uppercase;
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
`;
