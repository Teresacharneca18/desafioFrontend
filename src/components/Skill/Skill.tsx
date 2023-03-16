import { FC } from "react";
import { SkillProps } from "./Skill.types";
import {
  StyledSkill,
  TitleSkill,
  StyledContactDescriotionInfo,
  Description,
} from "./Skill.styles";

const Skill: FC<SkillProps> = ({ children, title, description, ...props }) => {
  return (
    <StyledSkill {...props}>
      <TitleSkill>{title}</TitleSkill>
      <StyledContactDescriotionInfo>
        <Description>{description}</Description>
      </StyledContactDescriotionInfo>
    </StyledSkill>
  );
};

export default Skill;
