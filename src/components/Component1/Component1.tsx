import { FC } from "react";

import { StyledComponent, Title } from "./Component1.styles";
import { Component1Props } from "./Component1.types";
import Subtitle from "../Subtitle";
import CONSTANTS from "../../constants/constants";
const { portfolioTitles } = CONSTANTS;
const Component1: FC<Component1Props> = ({
  children,
  title,
  infoComponent,
  isVertical,
  ...props
}) => {
  return isVertical ? (
    <StyledComponent {...props}>
      <Title>
        <Subtitle title={portfolioTitles.title}></Subtitle>
      </Title>

      {infoComponent}
    </StyledComponent>
  ) : (
    <StyledComponent {...props}>
      <Subtitle title={title}></Subtitle>
      {infoComponent}
    </StyledComponent>
  );
};

export default Component1;
