import styled from "styled-components";

export const StyledIconButton = styled.button`
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: #ffffff;
  border: 3px solid #d5d5d5;
  width: fit-content;
  padding: 3.5px;
  margin-left: 10px;
  border-radius: 30px;
  cursor: pointer;
  width: 177px;
  height: 62px;
  svg {
    width: 25px;
    height: 25px;
  }
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;

  &:hover {
    color: #d5d5d5;
    border: 3px solid #007ced;
  }
`;
