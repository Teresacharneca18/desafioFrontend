import styled from "styled-components";

export const StyledCentralDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  background-color: #222222;
  position: absolute;

  right: 237px;
  left: 237px;
  top: 276px;
  top: 276px;
  h3,
  p,
  svg {
    color: blue;
  }
  p {
    font-size: 12px;
  }
  h3 {
    span {
      font-size: 23px;
      letter-spacing: 2px;
    }
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 15px;
  h6 {
    margin: 0;
  }
`;

export const StyledImage = styled.div`
  display: inline-block;
  width: 528px;
  height: 528px;
  box-sizing: border-box;
  img {
    width: 528px;
    height: 528px;
  }
`;
export const StyledPageInfo = styled.div`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  text-align: left;
`;

export const StyledTitle = styled.div`
  position: absolute;
  width: 803px;
  height: 45px;
  top: 118px;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 35px;
  color: #ffffff;
`;
export const StyledSubtitle = styled.div`
  position: absolute;
  width: 803px;
  height: 30px;
  text-align: left;
  top: 44px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.5);
`;

export const StyledDescription = styled.div`
  position: absolute;
  height: 146px;
  width: 803px;
  left: 547px;
  top: 207px;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  color: #ffffff;
`;

export const StyledPageName = styled.div`
  display: flex;
  align-items: center;
  h3,
  p {
    margin: 0;
    text-transform: uppercase;
    line-height: normal;
  }
  h3 {
    margin-right: 24px;
  }
  p {
    letter-spacing: 0.36em;
  }
`;
