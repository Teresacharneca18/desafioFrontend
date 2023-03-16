import { FC } from "react";
import { SkillsInfoDivProps } from "./SkillsInfoDiv.types";
import { StyledSkillsInfoDiv } from "./SkillsInfoDiv.styles";

import SkillsInfo from "../SkillsInfo";
import frontendSkill1Icon from "../../assets/frontendSkillsIcon/frontendSkill1Icon.jpg";
import frontendSkill2Icon from "../../assets/frontendSkillsIcon/frontendSkill2Icon.jpg";
import frontendSkill3Icon from "../../assets/frontendSkillsIcon/frontendSkill3Icon.jpg";

import backendSkill1Icon from "../../assets/backendSkillsIcon/backendSkill1Icon.jpg";
import backendSkill2Icon from "../../assets/backendSkillsIcon/backendSkill2Icon.jpg";

import CONSTANTS from "../../constants/constants";
const {
  frontendSkill1,
  frontendSkill2,
  frontendSkill3,
  backendSkill1,
  backendSkill2,
} = CONSTANTS;

const SkillsInfoDiv: FC<SkillsInfoDivProps> = ({
  children,
  title = "",
  subtitle = "",
  description = "",
  page = "frontend",
  ...props
}) => {
  return page === "frontend" ? (
    <StyledSkillsInfoDiv>
      <SkillsInfo
        title={frontendSkill1.title}
        description={frontendSkill1.description}
        image={frontendSkill1Icon}
      ></SkillsInfo>
      <SkillsInfo
        title={frontendSkill2.title}
        description={frontendSkill2.description}
        image={frontendSkill2Icon}
      ></SkillsInfo>
      <SkillsInfo
        title={frontendSkill3.title}
        description={frontendSkill3.description}
        image={frontendSkill3Icon}
      ></SkillsInfo>
    </StyledSkillsInfoDiv>
  ) : (
    <StyledSkillsInfoDiv>
      <SkillsInfo
        title={backendSkill1.title}
        description={backendSkill1.description}
        image={backendSkill1Icon}
      ></SkillsInfo>
      <SkillsInfo
        title={backendSkill2.title}
        description={backendSkill2.description}
        image={backendSkill2Icon}
      ></SkillsInfo>
    </StyledSkillsInfoDiv>
  );
};

export default SkillsInfoDiv;
