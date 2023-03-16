import styled from "styled-components";

export const StyledHorizontalMainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
export const MainDivContainerHorizontal = styled.div`
  padding: 10px;
  margin-right: 60px;
`;

export const MainDivContainerVertical = styled.div`
  padding: 10px;
  grid-column: 1 / span 2;
`;
export const StyledVerticalMainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
export const Title = styled.p`
  color: white;
  font-family: "Poppins";
  font-size: 55px;
  font-weight: 700;
  text-align: left;
`;
