import Link from "next/link";
import styled, { css } from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0%;
  background: var(--white);
  z-index: 5;
  transition: 0.3s all ease-in-out;

  ${({ $showShadow }) =>
    $showShadow &&
    css`
      box-shadow: 0px 1px 10px #999;
    `}

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 5;
    background: var(--white);

    @media (max-width: 768px) {
      padding: 10px 20px;
    }
    .logo-wrapper {
      width: 110px;
      @media (min-width: 769px) {
        margin-bottom: 10px;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    }

    .hamburger {
      cursor: pointer;
      user-select: none;
      display: block;
      line-height: 1px;
      @media (min-width: 769px) {
        display: none;
      }
    }
  }
`;
export const Nav = styled.nav`
  max-width: 500px;
  width: 100%;
  @media (min-width: 992px) {
    max-width: 543px;
  }
  @media (max-width: 768px) {
    z-index: -1;
    padding: 20px 0;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    background: var(--white);
    max-width: 100%;
    transition: 0.3s all ease-in-out;
    ${({ $showMenu }) =>
      $showMenu
        ? css`
            transform: translateY(46px);
          `
        : css`
            transform: translateY(-110%);
          `}
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      display: block;
      max-width: 300px;
      margin: 0 auto;
    }
    a {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      height: 60px;
      display: flex;
      align-items: flex-end;
      padding: 8px;
      color: #566160;
      &.active {
        background: var(--success);
        color: var(--white);
      }
      @media (max-width: 768px) {
        height: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 20px;
      }
      @media (min-width: 992px) {
        font-size: 16px;
        line-height: 20px;
        height: 72px;
      }
    }
  }
`;
