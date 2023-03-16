import { HTMLAttributes, ReactNode } from "react";

export interface MainDivProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  component1: React.ReactNode;
  component2?: React.ReactNode;
  display: string;
}
