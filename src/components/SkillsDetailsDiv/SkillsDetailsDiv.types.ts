import { HTMLAttributes, ReactNode } from "react";

export interface SkillsDetailsDivProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  page?: string;
}
