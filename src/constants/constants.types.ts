export interface IConstants {
  homeTabs: {
    home: string;
    frontEndSkills: string;
    backEndSkills: string;
    portfolio: string;
    contact: string;
  };
  homeInfo: {
    title: string;
    subtitle: string;
    description: string;
  };
  homeButtons: {
    portfolio: string;
    contact: string;
  };

  menu: { text: string; url: string }[];
  bottomMenu: { text: string; url: string }[];
  copyright: string;
  contactTitle: { title: string };
  frontendTitles: { title: string; subtitle: string };
  backendTitles: { title: string; subtitle: string };
  portfolioTitles: { title: string; subtitle: string };
  backendSkills: { title: string; percentage: string }[];
  centralDivValues: { span: string; normal: string }[];
  frontendSkills: { title: string; percentage: string }[];
  secondDivValues: { title: string }[];
  frontendSkill1: {
    title: string;
    description: string;
  };
  frontendSkill2: {
    title: string;
    description: string;
  };
  frontendSkill3: {
    title: string;
    description: string;
  };
  backendSkill1: {
    title: string;
    description: string;
  };
  backendSkill2: {
    title: string;
    description: string;
  };
  phone: {
    title: string;
    description: string;
  };
  location: {
    title: string;
    description: string;
  };
  mail: {
    title: string;
    description: string;
  };
}
