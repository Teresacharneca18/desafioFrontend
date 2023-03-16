import { FC } from "react";

import { StyledComponent, Image } from "./Component2.styles";
import Subtitle from "../Subtitle";
import { Component2Props } from "./Component2.types";
import CONSTANTS from "../../constants/constants";

import image from "../../assets/galerieImage.jpg";
const { portfolioTitles } = CONSTANTS;

const Component2: FC<Component2Props> = ({
  children,
  title,
  skillsComponent,
  isVertical,
  ...props
}) => {
  return isVertical ? (
    <StyledComponent {...props}>
      <Subtitle title={portfolioTitles.subtitle}></Subtitle>
      {skillsComponent}
      <Image src={image} />
    </StyledComponent>
  ) : (
    <StyledComponent {...props}>
      <Subtitle title={title}></Subtitle>
      {skillsComponent}
    </StyledComponent>
  );
};

export default Component2;
