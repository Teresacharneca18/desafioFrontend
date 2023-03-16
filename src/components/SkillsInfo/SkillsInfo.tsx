import { FC } from "react";
import { SkillsInfoProps } from "./SkillsInfo.types";
import { StyledSkillsInfo, StyledInfo, Image } from "./SkillsInfo.styles";
import Skill from "../Skill/Skill";

const SkillsInfo: FC<SkillsInfoProps> = ({
  children,
  title,
  description,
  image,
  ...props
}) => {
  return (
    <StyledSkillsInfo {...props}>
      <Image src={image}></Image>
      <StyledInfo>
        <Skill title={title} description={description}></Skill>
      </StyledInfo>
    </StyledSkillsInfo>
  );
};

export default SkillsInfo;
