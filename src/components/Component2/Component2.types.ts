import { HTMLAttributes, ReactNode } from "react";

export interface Component2Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  skillsComponent: React.ReactNode;
  isVertical: boolean;
}
