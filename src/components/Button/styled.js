import styled from "styled-components";
import { Media } from "../../styled";
// syntax styled của MUI: styled('button')``
const getColor = {
  blue: {
    color: "blue",
    bg: "white",
  },
  dark: {
    color: "white",
    bg: "black",
  },
};
const Title = styled.p`
  color: ${({ theme }) => theme.COLOR_1};
`;
const Button = styled.button`
  // Kiểu 1: Truyền theme
  background-color: ${({ color }) => color};
  // Kiểu 2: Truyền điều kiện theo props
  ${({ sizeButton }) =>
    sizeButton &&
    `
   width: ${sizeButton}px;
   height: ${sizeButton / 3}px;
 `}
  // Kiểu 3: Lồng giá trị nhau mà không ảnh hưởng css các UI chỗ khác
border-radius: ${({ bdradius }) => bdradius || "5px"};

  // Kiểu 4: Thêm css theo điều kiện
  ${({ color }) => color && `color: ${color};`}
  // Kiểu 5:
  ${({ typeBtn }) =>
    typeBtn &&
    `
    background-color: ${getColor[typeBtn].bg};
    color: ${getColor[typeBtn].color};
  `}

  ${Title} {
    ${({ theme }) => (theme.COLOR_1 = "red")};
    font-size: 20px;
  }
`;

const CloneButton = styled(Button)`
  ${Media.lessThan(Media.SIZE.M)} {
    /* transform: scale(2); */
    ${Title} {
      font-size: 40px;
    }
  }
`;
export { Button, CloneButton, Title };
