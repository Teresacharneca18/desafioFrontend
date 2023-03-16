import { FC } from "react";
import { SkillsDetailsDivProps } from "./SkillsDetailsDiv.types";
import { StyledSkillsDetailsDiv } from "./SkillsDetailsDiv.styles";

import CONSTANTS from "../../constants/constants";
import SlideBarSkill from "../SlideBarSkill";
const { frontendSkills, backendSkills } = CONSTANTS;

const SkillsDetailsDiv: FC<SkillsDetailsDivProps> = ({
  children,
  title = "",
  subtitle = "",
  description = "",
  page = "frontend",
  ...props
}) => {
  return page === "frontend" ? (
    <StyledSkillsDetailsDiv>
      {frontendSkills.map((skill) => (
        <SlideBarSkill
          title={skill.title}
          percentage={skill.percentage}
        ></SlideBarSkill>
      ))}
    </StyledSkillsDetailsDiv>
  ) : (
    <StyledSkillsDetailsDiv>
      {backendSkills.map((skill) => (
        <SlideBarSkill
          title={skill.title}
          percentage={skill.percentage}
        ></SlideBarSkill>
      ))}
    </StyledSkillsDetailsDiv>
  );
};

export default SkillsDetailsDiv;
