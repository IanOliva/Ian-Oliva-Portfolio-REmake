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
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-7xl font-resident tracking-wide text-center mb-6">
          <span className="text-primary">C</span>ontacto
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          ¿Tenes algun proyecto en mente o quieres colaborar? No dudes en
          contactarme. Siempre estoy abierto a discutir nuevas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <Spoiler revealOn="click">ianoliva2000@gmail.com</Spoiler>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Teléfono</h4>
                  <Spoiler revealOn="click">+54 11 44198529</Spoiler>
                </div>
              </div>

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
              <h4 className="font-medium mb-4 text-2xl">Conecta conmigo</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ian-oliva-dev"
                  target="_blank"
                  className="text-glow card-hover"
                >
                  <Linkedin size={35} />
                </a>

                <a
                  href="https://www.instagram.com/_ian.olv_/?igsh=ajhsb3BpaHI3amg1"
                  target="_blank"
                  className="text-glow card-hover"
                >
                  <Instagram size={35} />
                </a>

                <a
                  href="https://github.com/IanOliva"
                  target="_blank"
                  className="text-glow card-hover"
                >
                  <Github size={35} />
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ian Oliva..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Tu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
