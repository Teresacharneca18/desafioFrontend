import { FC } from "react";
import { TitleDivProps } from "./TitleDiv.types";
import { StyledTitleDiv, Title } from "./TitleDiv.styles";

const TitleDiv: FC<TitleDivProps> = ({ children, title, ...props }) => {
  return (
    <StyledTitleDiv {...props}>
      <Title>{title}</Title>
    </StyledTitleDiv>
  );
};

export default TitleDiv;
