import styled from "styled-components";

export const StyledSignatureCollection = styled.div`
  background: #f1efe6;
  padding: 30px 0;
  margin-bottom: 30px;
  .section-title {
    display: block;
    font-size: 23px;
    line-height: 27px;
    font-weight: 300;
    margin-bottom: 30px;
    text-align: center;
  }
  .tab-wrapper {
    margin-bottom: 30px;
  }
  .tab-head {
    max-width: 710px;
    width: 100%;
    margin: 0 auto 60px;
    @media (min-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
  }
  .tab-btn {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    text-align: center;
    color: var(--black);
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    border: 1px solid var(--primary);
    margin-bottom: 10px;

    @media (min-width: 500px) {
      border: none;
      margin-bottom: 0;
    }
    @media (min-width: 768px) {
      padding: 8px;
      font-size: 18px;
      line-height: 22px;
    }
  }
  .tab-btn-active {
    background: var(--primary);
    color: var(--white);
  }
  .tab-body {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .btn-wrapper {
    max-width: 180px;
    margin: 0 auto;
  }
`;
export const StyledItemCard = styled.div`
  /* max-width: 346px; */
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }

  .card-title {
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    color: #18191a;
    display: block;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media (min-width: 992px) {
      font-size: 31px;
      line-height: 35px;
      margin-bottom: 25px;
    }
  }
  .description {
    min-height: 119px;
  }
  p {
    margin-bottom: 15px;
  }
  .image-wraper {
    @media (max-width: 375px) {
      max-width: 346px;
    }
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  a {
    display: block;
    margin-bottom: 15px;
  }
`;
