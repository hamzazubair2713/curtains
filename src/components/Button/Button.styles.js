import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : "10px")};
  padding: 15px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: ${({ $width }) => $width && $width};
  min-width: 70px;
  background: var(--primary);
  color: var(--white);
  transition: 0.3s all ease-in-out;
  ${({ $sm }) =>
    $sm &&
    css`
      font-size: 12px;
      line-height: 18px;
      padding: 12px 20px;
      font-weight: 400;
    `}
  &:hover {
    opacity: 0.85;
    box-shadow: 0px 9px 9px 3px rgba(29, 41, 57, 0.04);
  }
  @media (max-width: 768px) {
    padding: 12px 15px;
  }

  /***** Background-Variants-Start *****/
  ${({ $variant }) =>
    $variant == "secondary" &&
    css`
      outline: 2px solid var(--secondary);
      background: var(--secondary);
      border-radius: 8px;
    `}
  ${({ $variant }) =>
    $variant == "dark" &&
    css`
      background: var(--black);
    `}
  ${({ $variant }) =>
    $variant == "light" &&
    css`
      background: var(--white);
      color: var(--black);
    `}
  ${({ $variant }) =>
    $variant == "blur" &&
    css`
      background: rgba(255, 255, 255, 0.05);
      -webkit-backdrop-filter: blur(9px);
      backdrop-filter: blur(9px);
      color: var(white);
    `}
 
  /*****************Background Variants End*********************/


  /*****************Border Variants Start*********************/

  
  ${({ $outline }) =>
    $outline == "primary" &&
    css`
      border: 1px solid var(--danger);
      background: transparent;
      color: var(--danger);

      &:hover {
        background: var(--danger);
        color: var(--white);
      }
    `}
  ${({ $outline }) =>
    $outline == "secondary" &&
    css`
      outline: 2px solid var(--secondary);
      border-radius: 8px;
      background: transparent;
      color: var(--secondary);

      &:hover {
        background: var(--secondary);
        color: var(--white);
      }
    `}
  ${({ $outline }) =>
    $outline == "success" &&
    css`
      border: 1px solid var(--success-500);
      background: transparent;
      color: var(--success-500);

      &:hover {
        background: var(--success-500);
        color: var(--white);
      }
    `}
  ${({ $outline }) =>
    $outline == "danger" &&
    css`
      border: 1px solid var(--danger-500);
      background: transparent;
      color: var(--danger-500);

      &:hover {
        background: var(--danger-500);
        color: var(--white);
      }
    `}
    
    /*****************Border Variants End*********************/

    .loader {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
