import styled from "styled-components";
import bg from "../../../../public/assets/images/ourservicesBg.jpg";
export const StyledServices = styled.div`
  background: url(${bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 574px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 0;
  color: var(--white);
  margin-bottom: 50px;
  .container {
    width: 100%;
  }
  h1 {
    font-size: 35px;
    line-height: 39px;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 25px;
    @media (min-width: 768px) {
      font-size: 45px;
      line-height: 49px;
    }
    @media (min-width: 992px) {
      font-size: 72px;
      line-height: 76px;
    }
  }
  .desc {
    max-width: 619px;
    width: 100%;
    margin-bottom: 20px;
    @media (min-width: 992px) {
      line-height: 35px;
    }
  }
`;
