import { HTMLAttributes, ReactNode } from "react";

export interface ContactInfoProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}
