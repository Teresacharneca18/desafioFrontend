import { FC } from "react";
import { SlideBarProps } from "./SlideBarSkill.types";
import {
  StyledSlideBar,
  TitleSlideBar,
  PercentageSlideBar,
  StyledBottomBar,
  StyledPercentageBar,
  StyledInfoDiv,
  StyledSliderDiv,
} from "./SlideBarSkill.styles";

const SlideBarKill: FC<SlideBarProps> = ({
  children,
  title,
  percentage,
  ...props
}) => {
  return (
    <StyledSlideBar {...props}>
      <StyledInfoDiv>
        <TitleSlideBar>{title}</TitleSlideBar>
        <PercentageSlideBar>{percentage + "%"}</PercentageSlideBar>
      </StyledInfoDiv>
      <StyledSliderDiv>
        <StyledPercentageBar
          style={{ width: percentage + "%" }}
        ></StyledPercentageBar>
        <StyledBottomBar></StyledBottomBar>
      </StyledSliderDiv>
    </StyledSlideBar>
  );
};

export default SlideBarKill;
