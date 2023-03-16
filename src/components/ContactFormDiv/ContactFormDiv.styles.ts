import styled from "styled-components";

export const StyledHorizontalContactFormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
export const ContactFormDivContainerHorizontal = styled.div`
  padding: 10px;
  margin-right: 60px;
`;

export const ContactFormDivContainerVertical = styled.div`
  padding: 10px;
  grid-column: 1 / span 2;
`;
export const StyledVerticalContactFormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;
export const Title = styled.p`
  color: white;
  font-family: "Poppins";
  font-size: 55px;
  font-weight: 700;
  text-align: left;
`;

export const InputText = styled.input`
  box-sizing: border-box;
  height: 53px;
  width: 512px;
  background: transparent;
  border: 2px solid #555555;
  border-radius: 5px;
  color: #555555;
  position: absolute;
`;

export const SelectInput = styled.select`
  box-sizing: border-box;
  height: 53px;
  width: 512px;
  background: transparent;
  border: 2px solid #555555;
  color: #555555;
  border-radius: 5px;
  position: absolute;
`;
