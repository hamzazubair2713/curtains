import styled from "styled-components";

export const StyledSummerSale = styled.div`
  margin-bottom: 40px;
  .desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: #18191a;
  }
  h3 {
    font-size: 36px;
    font-weight: 300;
    line-height: 40px;
    text-align: center;
    color: #18191a;
  }
  .btn-loadmore {
    max-width: 311px;
    margin: 0 auto;
  }
  .container {
    margin-bottom: 50px;
  }
  .slick-slide {
    padding: 0px 5px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const SliderCard = styled.div`
  max-width: 300px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #727272;
  .img-wrap {
    margin-bottom: 27px;
    img {
      width: 100%;
    }
  }
  .item-name {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #18191a;
    display: block;
    margin-bottom: 5px;
  }
  .discreption {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 5px;
  }
  .whatsapp-btn {
    max-width: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 7px 10px;
    background: var(--success);
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
    color: var(--white);
    margin: 0 auto !important;
  }
`;
