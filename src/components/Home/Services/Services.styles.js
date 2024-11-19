import styled from "styled-components";

export const StyledServices = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    @media (min-width: 992px) {
      font-size: 30px;
      line-height: 34px;
    }
  }
  .services-cols {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 700px) {
      flex-wrap: nowrap;
    }
    @media (min-width: 992px) {
      justify-content: space-around;
    }
  }
  .col {
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    text-align: center;
    color: var(--black);

    @media (min-width: 992px) {
      font-size: 15px;
      line-height: 19px;
    }
    .image-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 10px;
      background-color: var(--primary);
      margin-bottom: 10px;
      padding: 15px;

      @media (min-width: 992px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
