import { HTMLAttributes, ReactNode } from "react";

export interface CentralDivProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
}
