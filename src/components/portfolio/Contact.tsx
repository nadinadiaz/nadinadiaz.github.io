import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Contacto</p>
          <div className="glow-line w-16 mb-6 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Hablemos</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            ¿Tenés un proyecto en mente o una oportunidad de colaboración? 
            Me encantaría conectar.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:nadina.diaz@email.com"
              className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-colors group"
            >
              <Mail size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-colors group"
            >
              <Linkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-colors group"
            >
              <Github size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
