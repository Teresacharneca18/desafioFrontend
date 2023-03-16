import { ButtonHTMLAttributes } from "react";

export interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  redirect: string;
  values?: [any];
}
