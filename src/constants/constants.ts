import { IConstants } from "./constants.types";

export default {
  homeTabs: {
    home: "Home",
    frontEndSkills: "Front-end skills",
    backEndSkills: "Back-end skills",
    portfolio: "Portfolio",
    contact: "Contact",
  },

  homeInfo: {
    title: "DevRos",
    subtitle: "Full Stack Developer",
    description:
      "Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi ",
  },
  homeButtons: {
    portfolio: "Portfolio",
    contact: "Contact",
  },
  menu: [
    { text: "Home", url: "/" },
    { text: "Front-end skills", url: "/frontend" },
    { text: "Back-end skills", url: "/backend" },
    { text: "Portfolio", url: "/portfolio" },
    { text: "Contact", url: "/contact" },
  ],
  bottomMenu: [
    { text: "Instagram", url: "https://www.instagram.com/" },
    { text: "Facebook", url: "https://www.facebook.com/" },
    { text: "Youtube", url: "https://www.youtube.com/" },
  ],
  centralDivValues: [
    { span: "Dev", normal: "Ros" },
    { span: "Merkur", normal: "Cukrárna " },
    { span: "Merkur", normal: "Pekárna " },
    { span: "", normal: "Místo pro tvoji firmu" },
  ],

  secondDivValues: [
    {
      title: "All",
    },
    { title: "Web" },
    {
      title: "Komponenty",
    },
    {
      title: "Animace",
    },
    {
      title: "Mockups",
    },
  ],
  frontendTitles: {
    title: "Co dělám ?",
    subtitle: "Coding Skills",
  },

  backendTitles: {
    title: "Co dělám ?",
    subtitle: "Coding Skills",
  },
  contactTitle: {
    title: "Kontaktuj mě !",
  },

  portfolioTitles: {
    title: "Klienti",
    subtitle: "Galerie",
  },
  frontendSkills: [
    { title: "HTML", percentage: "100" },
    { title: "CSS", percentage: "80" },
    { title: "JavaScript", percentage: "60" },
    { title: "React", percentage: "35" },
    { title: "Sass", percentage: "30" },
    { title: "GreenShock", percentage: "20" },
  ],
  backendSkills: [
    { title: "PHP", percentage: "10" },
    { title: "MySQL", percentage: "10" },
  ],
  frontendSkill1: {
    title: "UI / UX Design",
    description:
      "Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou",
  },
  frontendSkill2: {
    title: "HTML, CSS, JavaScript",
    description:
      "Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou",
  },

  frontendSkill3: {
    title: "Sass,  Green Sock, React    ",
    description:
      "Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou ",
  },
  backendSkill1: {
    title: "PHP",
    description:
      "Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou ",
  },
  backendSkill2: {
    title: "Database",
    description:
      "Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou ",
  },
  phone: {
    title: "720 244 551 -2",
    description: "Fahradit klasický smysluplný text vhodnou bezvýznamovo",
  },
  location: {
    title: "Česká Republika",
    description: "Fahradit klasický smysluplný text vhodnou bezvýznamovo",
  },
  mail: {
    title: "fiktivni@gmail.com",
    description: "Fahradit klasický smysluplný text vhodnou bezvýznamovo",
  },
  copyright: "© 2022 Všechna práva vyhrazena.",
} as unknown as IConstants;
