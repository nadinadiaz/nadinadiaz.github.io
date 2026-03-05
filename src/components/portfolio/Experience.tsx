import { motion } from "framer-motion";

const experiences = [
  {
    period: "2009 – 2024",
    title: "Especialista en Metodología de la Investigación y Datos",
    org: "Independiente",
    items: [
      "Supervisé el desarrollo metodológico de múltiples proyectos de investigación, asegurando la integridad de los datos y la coherencia en la redacción técnica.",
      "Implementé marcos de trabajo estructurados para la validación de hipótesis, traduciendo requerimientos técnicos complejos en documentos finales de alta precisión.",
      "Transicioné exitosamente hacia herramientas de análisis modernas (SQL/R) para potenciar la profundidad de los informes técnicos.",
    ],
  },
  {
    period: "2014 – 2019",
    title: "Especialista en Documentación y Precisión Técnica",
    org: "Independiente",
    items: [
      "Análisis y síntesis de conferencias de alta complejidad en sectores médico, agro y petroquímico.",
      "Aseguré la fidelidad y claridad textual de datos especializados, facilitando la comunicación técnica en entornos corporativos.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Trayectoria</p>
          <div className="glow-line w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experiencia Laboral</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-1 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1" />

                <span className="text-xs uppercase tracking-widest text-primary font-medium">{exp.period}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.org}</p>

                <ul className="space-y-3">
                  {exp.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
