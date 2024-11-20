import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

export const StyledQA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #d5d8dc;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  cursor: pointer;
`;
export const Number = styled.div`
  h6 {
    font-weight: 700;
    font-size: 28px;
    line-height: normal;
    color: ${({ color }) => color};
  }
`;
export const QuestionAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1100px;
  transition: 0.3s all ease-in-out;
  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
    color: ${({ $color }) => ($color ? "#254d4d" : "var(--black)")};
    @media (min-width: 992px) {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #d5d8dc;
`;
export const Answer = styled.div`
  overflow-y: hidden;
  transition: 1s all ease-in-out;
  max-height: ${({ $height }) => $height};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  padding-top: 20px;
  padding-top: ${({ $padding }) => ($padding ? "20px" : "0")};

  ul {
    li {
      position: relative;
      padding-left: 15px;
      margin-bottom: 10px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      a {
        color: #434956;
      }
      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: black;
      }
    }
  }
  /* 
  p {
    padding: 0px 0 20px 0;
   
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
    }
  } */
`;
export const ShowAnswer = styled.div``;

export const QuestionNumber = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
`;

export const AddIcon = styled(FaPlus)`
  color: #000000;
  font-size: 18px;
  cursor: pointer;
`;
export const RemoveIcon = styled(FaMinus)`
  color: #254d4d;
  font-size: 18px;
  cursor: pointer;
`;
