import styled from "styled-components";

export const StyledRelatedProduct = styled.div`
  margin-bottom: 40px;
  h3 {
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 20px;
    text-align: center;
    color: var(--body-text-50);
  }
  .related-products {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 768px) {
      column-gap: 50px;
      grid-template-columns: 1fr 1fr 1fr;
    }
    margin-bottom: 30px;
  }
  .button-wrap {
    max-width: 256px;
    width: 100%;
    margin: 0 auto;
  }
`;
