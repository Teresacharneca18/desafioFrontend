import styled from "styled-components";

export const HomepageWrapper = styled.div`
  background: #222222;
  width: auto;
  height: 100vh;
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
