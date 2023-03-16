import { HTMLAttributes, ReactNode } from "react";

export interface ContactInfoDivProps extends HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  description?: string;
  page?: string;
}
