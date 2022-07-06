import styled from "styled-components";
import { Media } from "../../styled";

const WrapperForm = styled.div`
  width: 800px;
  ${Media.lessThan(Media.SIZE.M)} {
    /* transform: scale(2); */
    width: 300px;
  }
  background-color: red;
`;

export { WrapperForm };
