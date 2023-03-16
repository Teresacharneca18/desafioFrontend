import styled from "styled-components";

export const FrontendWrapper = styled.div`
  background: #222222;
  width: auto;
  height: 100vh;
`;

export const StyledSkillsDetailsDiv = styled.div`
  position: absolute;

  height: auto;
  width: 676.5220336914062px;
  left: 1135.652099609375px;
  top: 525px;
  border-radius: 8px;

  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SubtitleDiv = styled.div`
  position: absolute;
  width: 168px;
  height: 45px;
  left: 120px;
  top: 414px;
`;
export const SecondSubtitleDiv = styled.div`
  position: absolute;
  width: 168px;
  height: 45px;
  left: 1134px;
  top: 414px;
`;

export const Subtitle = styled.h3`
  width: 168px;
  height: 0px;
  left: 120px;
  top: 414px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;
`;

export const SubtitleLine1 = styled.hr`
  position: absolute;
  width: 127px;
  height: 0px;
  top: 55px;
  margin-block-end: 0.5em;
  margin-inline-start: 0;
  border: 2px solid #353535;
`;

export const SubtitleLine2 = styled.hr`
  position: absolute;
  width: 40px;
  height: 0px;
  top: 55px;
  margin-block-end: 0.5em;
  margin-inline-start: 0;
  border: 2px solid rgb(0, 124, 237);
`;
export const StyledContentWrapper = styled.div`
  max-width: 936px;
  margin: auto;
  padding: 5px 30px 60px 30px;
  display: block;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 855px;
  h1 {
    font-size: 31px;
    margin: 0;
  }
`;

export const StyledLandingCards = styled.ol`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 23px 0 0;
`;

export const AppCardWrapper = styled.li`
  width: 292px;

  h2 {
    font-weight: normal;
    text-transform: uppercase;
    font-size: 31px;
  }

  h5 {
    text-align: center;
    text-transform: unset;
  }

  p {
    font-size: 9px;
    color: green;
  }
`;
