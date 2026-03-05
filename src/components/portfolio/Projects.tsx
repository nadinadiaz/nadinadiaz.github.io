import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
  {
    title: "Capstone – Google Data Analytics",
    description:
      "Análisis de caso completo aplicando el framework de análisis de datos de Google: Ask, Prepare, Process, Analyze, Share, Act. Incluye limpieza de datos, análisis exploratorio y visualización con R.",
    tags: ["R", "SQL", "Tableau", "Data Cleaning"],
    status: "completed" as const,
  },
  {
    title: "Capstone – Google Project Management",
    description:
      "Proyecto de gestión aplicando metodologías ágiles y herramientas de planificación. Documentación completa del ciclo de vida del proyecto.",
    tags: ["Agile", "Scrum", "Project Charter", "Stakeholders"],
    status: "in-progress" as const,
  },
  {
    title: "Análisis de Datos en Bioinvestigación",
    description:
      "Proyecto personal integrando datos de investigación biomédica con herramientas de analytics modernas para generar insights accionables.",
    tags: ["Python", "SQL", "Data Viz", "Biodata"],
    status: "planned" as const,
  },
];

const statusLabel = {
  completed: { text: "Completado", class: "bg-accent/15 text-accent" },
  "in-progress": { text: "En curso", class: "bg-primary/15 text-primary" },
  planned: { text: "Próximamente", class: "bg-muted text-muted-foreground" },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Portfolio</p>
          <div className="glow-line w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Proyectos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-7 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusLabel[p.status].class}`}>
                  {statusLabel[p.status].text}
                </span>
                {p.status === "completed" ? (
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <Lock size={16} className="text-muted-foreground/50" />
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tag}
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

export default Projects;
