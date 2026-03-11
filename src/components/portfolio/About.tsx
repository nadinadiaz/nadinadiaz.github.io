import { motion } from "framer-motion";
import { Database, FlaskConical, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: FlaskConical,
    title: "Pensamiento analítico",
    desc: "Experiencia analizando datos complejos en investigación científica, aplicando métodos rigurosos para identificar patrones y validar resultados.",
  },
  {
    icon: Database,
    title: "Exploración y análisis de datos",
    desc: "Uso herramientas como SQL, R y Excel para explorar datos, detectar tendencias y generar insights accionables.",
  },
  {
    icon: Lightbulb,
    title: "Comunicación de resultados",
    desc: "Transformo análisis complejos en visualizaciones y conclusiones claras que faciliten la toma de decisiones.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-section text-section-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Sobre mí</p>
          <div className="glow-line w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-section-foreground mb-6">
            Mi enfoque analítico
          </h2>
          <p className="text-section-foreground/70 max-w-2xl text-lg leading-relaxed">
            Durante más de 15 años trabajé en investigación científica analizando datos complejos para identificar patrones, validar hipótesis y generar conocimiento confiable.
            Esta experiencia me permitió desarrollar un enfoque analítico riguroso basado en la exploración profunda de los datos, la validación de resultados y la comunicación clara de hallazgos.
            Actualmente aplico ese mismo método al análisis de datos de negocio, utilizando herramientas como SQL, R y Excel para transformar información en insights que apoyen la toma de decisiones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl p-8 bg-white border border-section-foreground/10 hover:border-primary/30 transition-colors group shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <h.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-section-foreground mb-3">{h.title}</h3>
              <p className="text-section-foreground/60 text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
