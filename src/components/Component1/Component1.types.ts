import { HTMLAttributes, ReactNode } from "react";

export interface Component1Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  isVertical: boolean;
  infoComponent: React.ReactNode;
}
