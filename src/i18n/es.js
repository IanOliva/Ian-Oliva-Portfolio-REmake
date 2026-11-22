export default {
  language: { label: "Idioma" },
  nav: {
    label: "Secciones",
    hero: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    links: "Enlaces", 
  },
  // Texto del aviso al apuntar un objeto. La clave es el id del objeto.
  objects: {
    hero: "Ver mi presentación",
    about: "Leer sobre mí",
    projects: "Ver mis proyectos",
    contact: "Contactarme",
    links: "Ver mis enlaces",
  },
  // Título del modal. La clave es la sección activa.
  sections: {
    hero: "Presentación",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades técnicas",
    contact: "Contacto",
    links: "Enlaces",
  },
  prompt: { action: "Clic", keyboardAction: "Enter",},
  modal: { close: "Cerrar" },
  loading: {
    label: "Cargando el entorno",
    hint: "La primera vez tarda más porque se descargan los modelos 3D.",
    error:
      "No se pudo cargar el entorno. Revisá tu conexión y volvé a intentar.",
    retry: "Recargar",
  },
   // Contenido de cada sección. Las llaves {así} marcan texto resaltado.
  content: {
    hero: {
      file: "EXPEDIENTE CLASIFICADO",
      subject: "SUJETO",
      dossier:
        "{[}Archivo clasificado{]}: Desarrollador especializado en {desarrollo web}. Estado: {activo}. Misión: crear experiencias digitales intuitivas y eficientes. Visto por última vez en instalaciones de formación avanzadas de {Ingeniería de Software}.",
      cta: "Proyectos",
    },
     about: {
      title: "Sobre mi",
      profile:
        "Perfil orientado a [desarrollo web] moderno. Presenta habilidad para convertir ideas en prototipos estables y usables. Mantiene rutina continua de mejora, aprendizaje y refinamiento de procesos.",
      records:
        "Registros internos indican que el sujeto emplea [tecnologías avanzadas].",
      contactCta: "Contáctame",
      cvCta: "Ver CV",
      technologies: "Tecnologías",
    },
  },
     
};
