import styled from "styled-components";

export const QuestionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #424954;

    @media (min-width: 768px) {
      font-size: 38px;
      line-height: 42px;
    }
    @media (min-width: 992px) {
      font-size: 45px;
      line-height: 49px;
    }
  }
`;
