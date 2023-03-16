import { HTMLAttributes, ReactNode } from "react";

export interface SkillsInfoProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: any;
}
