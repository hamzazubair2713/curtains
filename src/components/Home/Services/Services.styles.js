import styled from "styled-components";

export const StyledServices = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 30px;
    font-weight: 600;
    line-height: 34px;
    text-align: center;
    margin-bottom: 20px;
  }
  .services-cols {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
  }
  .col {
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    color: var(--black);
    .image-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      border-radius: 10px;
      background-color: var(--primary);
      margin-bottom: 10px;
    }
  }
`;
