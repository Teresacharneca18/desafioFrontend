import { HTMLAttributes, ReactNode } from "react";

export interface SkillsInfoDivProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  page?: string;
}
