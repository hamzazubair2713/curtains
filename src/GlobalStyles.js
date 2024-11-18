const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
  :root {
 
    --primary: #BA8452;
    --secondary:#E2783C;
    --gray-50:#c0b7ae;
    --gray-100:#6f6f6f;
    --gray-150:#585858;
    --gray-200:#959595;
    --danger: #de2938;
    --body-color: #fff;
    --white: #fff;
    --info : #F1EFE6;
    --success: #254D4D;
    --black: #000;
    --body-text: #566160;
    --body-text-25: #7c7b7c;
    --body-text-50: #153736;
    /* Body */
    --base-text-color: var(--body-text);
    --base-background-color: var(--body-color);
    --font-size-base: 20px;
    --line-height-base: 24px;
    --base-font-family: "Poppins",  sans-serif;
    --base-min-width: 375px;

  
  }
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }
 
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--base-text-color);
    font-size:var(--font-size-base);
    line-height:var(--line-height-base) ;
    font-weight: 300;
    font-family: var(--base-font-family);
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--white);
   
  }
  .container{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .container-fluid{
    max-width: 100%;
    padding: 0 20px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 98;
  }

  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 50px;  
    @media (min-width: 768px) {
    padding-top: 100px;  
      
    }
  }
  
.fake{
  height: 100vh;
  background: red;
  width: 100%;
}
 
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  figure{
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: var( --base-font-sans-serif);
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--body-text);
    font-weight: 400;
  }
  h1,
  .h1 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
   
    @media screen and (min-width: 768px){
    font-size: 40px;
    line-height: 44px;
    }
    @media screen and (min-width: 992px){
    font-size: 50px;
    line-height: 54px;
    }
    @media screen and (min-width: 1200px){
       font-size: 75px; 
    line-height: 79px;
    }
  }
  h2,
  .h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    @media screen and (min-width: 768px){
    font-size: 35px;
    line-height: 40px;
    }
    @media screen and (min-width: 1200px){
        font-size: 45px;
        line-height: 49px;
    }

  }
  h3,
  .h3 {
    font-size: 26px;
    line-height: 30px;
  }
  h4,.h4 {
    color:white;
    font-size: 14px;
    line-height: 23px;
    @media (min-width: 576px){
      font-size: 16px;
    }
    @media (min-width: 786px){
      font-size: 18px;
    }
  }
  

  p {
    margin: 0 0 15px;

    &:last-child {
      margin: 0;
    }
  }
  .faqSection{
    width: 100px;
    
  }

  

  /* Track */
 
  /* Handle on hover */
  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }
 
`;
export default GlobalStyles;
