import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Contacto</p>
          <div className="glow-line w-16 mb-6 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-section-foreground mb-6">Hablemos</h2>
          <p className="text-section-foreground/60 text-lg mb-10 leading-relaxed">
            ¿Tenés un proyecto en mente o una oportunidad de colaboración? 
            Me encantaría conectar.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:nadinadiaz@gmail.com"
              className="w-14 h-14 rounded-xl bg-section border border-section-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors group shadow-sm"
            >
              <Mail size={22} className="text-section-foreground/50 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https:www.linkedin.com/in/nadina-diaz-9ab5aa364"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-section border border-section-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors group shadow-sm"
            >
              <Linkedin size={22} className="text-section-foreground/50 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl bg-section border border-section-foreground/10 flex items-center justify-center hover:border-primary/50 transition-colors group shadow-sm"
            >
              <Github size={22} className="text-section-foreground/50 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
