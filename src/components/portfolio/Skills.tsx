import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Análisis de Datos",
    skills: ["SQL", "R / RStudio", "Google Sheets", "Tableau", "Data Cleaning", "EDA"],
  },
  {
    category: "Gestión de Proyectos",
    skills: ["Agile / Scrum", "Project Charter", "Risk Management", "Stakeholder Analysis", "Asana"],
  },
  {
    category: "Investigación",
    skills: ["Metodología Científica", "Redacción Técnica", "Validación de Hipótesis", "Revisión Bibliográfica"],
  },
  {
    category: "Certificaciones",
    skills: ["Google Data Analytics (2025)", "Google Project Management (en curso)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Competencias</p>
          <div className="glow-line w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Habilidades & Certificaciones</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-7"
            >
              <h3 className="text-sm uppercase tracking-widest text-primary font-medium mb-5">{group.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-lg bg-secondary text-foreground border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
