export default {
  language: { label: "Language" },
  nav: {
    label: "Sections",
    hero: "Home",
    about: "About me",
    projects: "Projects",
    contact: "Contact",
    links: "Links",
  },

  objects: {
    hero: "View my introduction",
    about: "Read about me",
    projects: "See my projects",
    contact: "Get in touch",
    links: "View my links",
  },
  // Título del modal. La clave es la sección activa.
  sections: {
    hero: "Introduction",
    about: "About me",
    projects: "Projects",
    skills: "Technical Skills",
    contact: "Contact",
    links: "Links",
  },
  prompt: { action: "Click", keyboardAction: "Enter" },
  modal: { close: "Close" },
  loading: {
    label: "Loading the room",
    hint: "The first visit takes longer because the 3D models are downloaded.",
    error: "The room could not be loaded. Check your connection and try again.",
    retry: "Reload",
  },
   // Section content. Curly braces {like this} mark highlighted text.
  content: {
    hero: {
      file: "CLASSIFIED FILE",
      subject: "SUBJECT",
      dossier:
        "{[}Classified file{]}: Developer specialized in {web development}. Status: {active}. Mission: build intuitive, efficient digital experiences. Last seen at advanced training facilities for {Software Engineering}.",
      cta: "Projects",
    },
  },
};
