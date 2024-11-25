import styled from "styled-components";

export const StyledBookAppointment = styled.div`
  .container {
    width: 100%;
    margin-bottom: 35px;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }
    @media (min-width: 992px) {
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  .form {
    width: 100%;
    margin: 0 auto 30px;

    .title {
      display: block;
      margin-bottom: 30px;
      font-size: 32px;
      line-height: 36px;
      font-weight: 400;
      @media (min-width: 992px) {
        font-size: 40px;
        line-height: 44px;
        margin-bottom: 50px;
      }
    }
    @media (min-width: 992px) {
      margin: 0;
      max-width: 465px;
      width: 100%;
    }
  }
  .combine-fields {
    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  textarea {
    width: 100%;
    font-family: inherit;
    color: var(--body-text);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding: 15px 10px;
    border: 1px solid #e3e3e3;
    outline: none;
    resize: none;
    height: 150px;
    margin-bottom: 15px;
  }
  .image-wrapper {
    margin: 0 auto;
    @media (min-width: 992px) {
      margin: 0;
      max-width: 575px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;
