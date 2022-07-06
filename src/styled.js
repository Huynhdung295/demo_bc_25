import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
}
`;
const theme = {
  COLOR_1: "green",
  COLOR_2: "blue",
  COLOR_3: "white",
};

const SIZE = {
  XXL: 1441, // Desktop
  XXL_1: 1366, // Desktop
  XL: 1024, // Laptop
  L: 768, // Tablet
  M: 576, // Mobile
};

class Media {
  static SIZE = SIZE;
  static greaterThan(windowSize) {
    return `@media only screen and (min-width: ${windowSize}px)`;
  }
  static lessThan(windowSize) {
    return `@media only screen and (max-width: ${windowSize}px)`;
  }
}

export { GlobalStyle, theme, Media };
