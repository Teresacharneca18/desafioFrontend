import { HTMLAttributes, ReactNode } from "react";

export interface SlideBarProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  percentage?: string;
}
