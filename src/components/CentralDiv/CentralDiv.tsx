import { FC } from "react";
import { CentralDivProps } from "./CentralDiv.types";
import {
  StyledCentralDiv,
  StyledImage,
  StyledTitle,
  StyledSubtitle,
  StyledDescription,
  StyledPageInfo,
} from "./CentralDiv.styles.";

import CONSTANTS from "../../constants/constants";

import logo from "../../assets/homepageImage.jpg";
import IconButton from "../IconButton";
const { homeTabs } = CONSTANTS;

const CentralDiv: FC<CentralDivProps> = ({
  children,
  title = "",
  subtitle = "",
  description = "",
  ...props
}) => {
  return (
    <StyledCentralDiv {...props}>
      <StyledImage>
        <img src={logo} alt="Logo" />
      </StyledImage>
      <StyledPageInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledDescription>{description}</StyledDescription>
        <div style={{ position: "absolute", top: "352px" }}>
          <IconButton
            placeholder={"Portfolio"}
            redirect={"portfolio"}
            onClick={() => {}}
          >
            {homeTabs.portfolio}
          </IconButton>
          <IconButton placeholder={"Portfolio"} redirect={"contact"}>
            {homeTabs.contact}
          </IconButton>
        </div>
      </StyledPageInfo>
    </StyledCentralDiv>
  );
};

export default CentralDiv;
