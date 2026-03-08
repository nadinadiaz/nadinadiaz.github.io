import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-15 blur-[120px]"
        style={{ background: `radial-gradient(circle, hsl(var(--primary)), hsl(var(--accent)))` }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] mb-6"
          style={{ color: 'hsl(var(--accent))' }}
        >
          Bioingeniería · Data Analytics · Business Insights
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          style={{ color: 'hsl(0 0% 100%)' }}
        >
          Nadina
          <br />
          <span className="text-gradient">Díaz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'hsl(220 15% 70%)' }}
        >
          Bioingeniera con más de 15 años analizando datos en investigación científica.
          {' '}Hoy aplico ese enfoque analítico al análisis de datos de negocio
          para transformar datos complejos en decisiones claras.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border font-medium text-sm hover:bg-card/10 transition-colors"
            style={{ borderColor: 'hsl(220 15% 30%)', color: 'hsl(220 15% 70%)' }}
          >
            Contacto
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about">
            <ArrowDown size={20} className="animate-bounce" style={{ color: 'hsl(220 15% 50%)' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
