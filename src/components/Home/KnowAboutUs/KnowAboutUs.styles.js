import styled from "styled-components";

export const StyledKnowAboutUs = styled.div`
  text-align: left;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
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
    @media (min-width: 992px) {
      white-space: nowrap;
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
  .container {
    @media (min-width: 992px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
    }
  }
  .image-section {
    max-width: 604px;
    width: 100%;
    margin: 0 auto 20px;

    @media (min-width: 992px) {
      margin: 0;
    }
  }
  .text-wrapper {
    max-width: 618px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 300;
    margin: 0 auto 20px;

    @media (min-width: 992px) {
      margin: 0;
    }
    @media (min-width: 1200px) {
      font-size: 18px;
      line-height: 34px;
    }
  }
  .portfolio-items-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 40px;
  }
  .portfolio-items {
    .title {
      color: var(--body-text-50);
      font-size: 22px;
      line-height: 26px;
      font-weight: 600;
      display: block;
      margin-bottom: 5px;
      @media (min-width: 992px) {
        margin-bottom: 12px;
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
  .btn-wrap {
    display: flex;
    gap: 30px;
    @media (max-width: 576px) {
      flex-direction: column;
      gap: 10px;

      button {
        width: 100%;
      }
    }
  }
`;
