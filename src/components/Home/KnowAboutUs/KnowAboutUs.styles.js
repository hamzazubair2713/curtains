import styled from "styled-components";

export const StyledKnowAboutUs = styled.div`
  text-align: left;
  h3 {
    font-size: 48px;
    font-weight: 600;
    line-height: 64px;
    color: var(--body-text-50);
  }
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-wrapper {
    max-width: 618px;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
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
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      display: block;
      margin-bottom: 12px;
    }
  }
  .btn-wrap {
    display: flex;
    gap: 30px;
  }
`;
