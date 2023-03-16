import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: #222222;
  width: auto;
  height: 100vh;
`;
export const Map = styled.img`
  position: relative;
  width: 1678px;
  height: 146px;
  left: 121px;
  top: 50px;
  z-index: 1000;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
`;

export const StyledMainDiv = styled.div`
  padding: 10px;
  margin-right: 60px;
`;

export const FormMainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const StyledVerticalDiv = styled.div`
  padding: 10px;
  grid-column: 1 / span 2;
`;
