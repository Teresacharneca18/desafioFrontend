import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      main: string;
      title: string;
      text: string;
      button: string;
      line: string;
      border: string;
    };

    fontFamilie: string;
    fontSizes: {
      navItem: string;
      mainTitle: string;
      mainSubtitle: string;
      mainDescriptio: string;
      skillTitle: string;
      skillDescription: string;
      skillPercentage: string;
      subNavItem: string;
    };
  }
}

export const Theme: DefaultTheme = {
  palette: {
    main: "#222222",
    title: "white",
    text: "rgba(255, 255, 255, 0.7)",
    button: "#D5D5D5",
    line: "#333333",
    border: "#007CED",
  },

  fontFamilie: "Propins",
  fontSizes: {
    navItem: "18px",
    mainTitle: "70px",
    mainSubtitle: "24px",
    mainDescriptio: "24px",
    skillTitle: "18px",
    skillDescription: "16px",
    skillPercentage: "14px",
    subNavItem: "20px",
  },
};

export default Theme;
