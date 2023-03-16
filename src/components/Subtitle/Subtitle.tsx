import { FC } from "react";

import {
  SubtitleDiv,
  StyledSubtitle,
  SubtitleLine1,
  SubtitleLine2,
  StyledLineDiv,
} from "./Subtitle.styles";
import { SubtitleProps } from "./Subtitle.types";

const Subtitle: FC<SubtitleProps> = ({ title, ...props }) => {
  return (
    <SubtitleDiv>
      <StyledSubtitle>{title}</StyledSubtitle>
      <StyledLineDiv>
        <SubtitleLine1></SubtitleLine1>
        <SubtitleLine2></SubtitleLine2>
      </StyledLineDiv>
    </SubtitleDiv>
  );
};

export default Subtitle;
