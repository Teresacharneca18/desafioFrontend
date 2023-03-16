import { ReactNode } from "react";

export interface BottomNavigationProps {
  copyright?: ReactNode;
  handleLogout: () => void;
  menu: { text: string; url: string }[];
}
