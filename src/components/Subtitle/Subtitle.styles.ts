import styled from "styled-components";

export const SubtitleDiv = styled.div`
  padding: 10px;
  grid-column: 1 / span 2;
  height: 45px;
`;

export const StyledSubtitle = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: rgb(255, 255, 255);
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  position: absolute;
`;
export const StyledLineDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const SubtitleLine1 = styled.hr`
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 127px;
  height: 0px;
  top: 55px;
  margin-block-end: 0.5em;
  margin-inline-start: 0;
  border: 2px solid #353535;
`;

export const SubtitleLine2 = styled.hr`
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 0px;
  top: 55px;
  margin-block-end: 0.5em;
  margin-inline-start: 0;
  border: 2px solid rgb(0, 124, 237);
`;
