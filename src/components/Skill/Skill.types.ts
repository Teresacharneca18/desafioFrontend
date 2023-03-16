import { HTMLAttributes, ReactNode } from "react";

export interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}
