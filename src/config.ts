const SiteConfig = {
  siteName: "Jörg Schöneburg - Full-Stack-Entwickler",
  defaultTheme: "system", // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  language: "de",
  textDirection: "ltr",
  links: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Über mich",
      href: "/ueber-mich",
    },
    {
      name: "Projekte",
      href: "/projekte",
    },
  ],
  footerLinks: [
    // {
    //   name: "Github",
    //   href: "https://github.com/jswebschmiede",
    //   target: "_blank",
    // },
    {
      name: "Impressum",
      href: "/impressum",
      target: null,
    },
    {
      name: "Datenschutz",
      href: "/datenschutz",
      target: null,
    },
    {
      name: "AGB",
      href: "/agb",
      target: null,
    },
  ],
  skills: [
    {
      name: "CSS",
      x: "-10vw",
      y: "-9vw",
    },
    {
      name: "HTML",
      x: "-21vw",
      y: "2vw",
    },
    {
      name: "JavaScript",
      x: "-24vw",
      y: "16vw",
    },
    {
      name: "Github",
      x: "-31vw",
      y: "-5vw",
    },
    {
      name: "SQL",
      x: "20vw",
      y: "6vw",
    },
    {
      name: "React",
      x: "0vw",
      y: "11vw",
    },
    {
      name: "Tailwind",
      x: "23vw",
      y: "15vw",
    },
    {
      name: "Figma",
      x: "10vw",
      y: "-4vw",
    },
    {
      name: "PHP",
      x: "12vw",
      y: "-12vw",
    },
    {
      name: "Web Design",
      x: "28vw",
      y: "-10vw",
    },
    {
      name: "CMS",
      x: "-12vw",
      y: "-21vw",
    },
  ],
};

export const SITE = { ...SiteConfig };
