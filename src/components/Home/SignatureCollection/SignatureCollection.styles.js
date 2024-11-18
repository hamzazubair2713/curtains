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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 710px;
    width: 100%;
    margin: 0 auto 60px;
  }
  .tab-btn {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: var(--black);
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
  }
  .tab-btn-active {
    background: var(--primary);
    color: var(--white);
  }
  .tab-body {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .btn-wrapper {
    max-width: 180px;
    margin: 0 auto;
  }
`;
export const StyledItemCard = styled.div`
  max-width: 346px;
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  .card-title {
    font-size: 31px;
    font-weight: 400;
    line-height: 35px;
    color: #18191a;
    display: block;
    margin-bottom: 25px;
  }
  .description {
    min-height: 119px;
  }
  p {
    margin-bottom: 15px;
  }
  .image-wraper {
    max-width: 346px;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  a {
    display: block;
    margin-bottom: 15px;
  }
`;
