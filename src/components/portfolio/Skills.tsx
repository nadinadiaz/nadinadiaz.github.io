import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface SkillGroup {
  category: string;
  skills: string[];
  certLink?: string;
}

const skillGroups: SkillGroup[] = [
  {
    category: "Bioingeniera — UNER",
    skills: ["Biomecánica", "Bioestadística", "Metodología de la Investigación", "Terminología Sanitaria", "Fisiología", "Procesamiento de Señales", "Instrumentación Biomédica", "Gestión Hospitalaria"],
  },
  {
    category: "Esp. Higiene y Seguridad en el Trabajo — UTN",
    skills: ["Evaluación de Riesgos", "Capacitación en Seguridad", "Normativa Legal", "Ergonomía", "Plan de Emergencias", "Auditoría de Seguridad"],
  },
  {
    category: "Google Data Analytics Professional Certificate",
    skills: ["SQL", "R / RStudio", "Google Sheets", "Tableau", "Data Cleaning", "EDA"],
    certLink: "https://www.credly.com/badges/94179df4-68e1-4b9c-a7f4-0ceada6dbf44/public_url",
  },
  {
    category: "Google Project Management Certificate",
    skills: ["Agile / Scrum", "Project Charter", "Risk Management", "Stakeholder Analysis", "Asana"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Formación</p>
          <div className="glow-line w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Educación & Certificaciones</h2>
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
              {group.certLink && (
                <a
                  href={group.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver certificado en Credly
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
