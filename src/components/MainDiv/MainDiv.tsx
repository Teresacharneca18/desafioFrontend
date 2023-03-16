import { FC } from "react";

import {
  StyledHorizontalMainDiv,
  MainDivContainerHorizontal,
  MainDivContainerVertical,
  StyledVerticalMainDiv,
} from "./MainDiv.styles";
import { MainDivProps } from "./MainDiv.types";

const MainDiv: FC<MainDivProps> = ({
  children,
  component1,
  component2,
  display,
  ...props
}) => {
  return display === "horizontal" ? (
    <StyledHorizontalMainDiv {...props}>
      <MainDivContainerHorizontal>{component1}</MainDivContainerHorizontal>
      <MainDivContainerHorizontal>{component2}</MainDivContainerHorizontal>
    </StyledHorizontalMainDiv>
  ) : (
    <StyledVerticalMainDiv {...props}>
      <MainDivContainerVertical>{component1}</MainDivContainerVertical>
      <MainDivContainerVertical>{component2}</MainDivContainerVertical>
    </StyledVerticalMainDiv>
  );
};

export default MainDiv;
