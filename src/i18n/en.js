export default {
  language: { label: "Language" },
  nav: { hero: "Home", about: "About me", projects: "Projects", contact: "Contact" },

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
  prompt: { action: "Click" },
  modal: { close: "Close" },
   loading: {
    label: "Loading the room",
    hint: "The first visit takes longer because the 3D models are downloaded.",
    error: "The room could not be loaded. Check your connection and try again.",
    retry: "Reload",
  },
};