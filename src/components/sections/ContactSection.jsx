import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { Spoiler } from "spoiled";
import emailjs from "@emailjs/browser";
import { Section } from "@/components/Section";
import ReusableTypewriter from "@/components/misc/ReusableTypewriter";
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Mensaje enviado con éxito!");
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("❌ Error al enviar mensaje: " + error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Section id="contact">
      {/* Overlay CRT Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.05)_0_2px,transparent_2px_4px)] opacity-20 animate-[scrollLines_6s_linear_infinite]" />
      <h2 className="text-4xl md:text-8xl font-resident tracking-wide text-left text-glow">
        <span className="text-primary">C</span>ontacto
      </h2>

      <div className="text-left text-muted-foreground mb-6 max-w-2xl text-lg font-mono">
        <ReusableTypewriter
          paragraphs={[
            `¿Tenes algun proyecto en mente o quieres colaborar? No dudes en
          contactarme. Siempre estoy abierto a discutir nuevas oportunidades.`,
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda */}
        <div className="">
          <h3 className="text-2xl font-mono mb-6">Información de Contacto</h3>

          <div className="space-y-4 justify-center font-mono">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-left">Email</h4>
                <Spoiler revealOn="click">ianoliva2000@gmail.com</Spoiler>
              </div>
            </div>

            {/* <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-left">Teléfono</h4>
                <Spoiler revealOn="click">+54 11 44198529</Spoiler>
              </div>
            </div> */}

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-left">Ubicación</h4>
                <span className="text-muted-foreground">
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-mono mb-2 text-2xl">Conecta conmigo</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ian-oliva-dev"
                target="_blank"
                className="text-glow card-hover"
              >
                <button className="p-3 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <div className="relative z-10">
                    <Linkedin size={35} className="" />
                  </div>
                </button>
              </a>

              <a
                href="https://www.instagram.com/_ian.olv_/?igsh=ajhsb3BpaHI3amg1"
                target="_blank"
                className="text-glow card-hover"
              >
                <button className="p-3 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <div className="relative z-10">
                    <Instagram size={35} />
                  </div>
                </button>
              </a>

              <a
                href="https://github.com/IanOliva"
                target="_blank"
                className="text-glow card-hover"
              >
                <button className="p-3 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <div className="relative z-10">
                    <Github size={35} />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha - Formulario */}
        <div className="bg-card  rounded-lg shadow-xs">
          <h3 className="text-2xl font-mono mb-6">Envia un mensaje</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 font-mono"
          >
            <div>
              <label htmlFor="name" className="block text-sm  mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full font-console px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Ian Oliva..."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono mb-2">
                Tu Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="w-full font-console px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="john@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono mb-2">
                Tu Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full font-console px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "fog-button w-full flex items-center justify-center gap-2 cursor-target"
              )}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
