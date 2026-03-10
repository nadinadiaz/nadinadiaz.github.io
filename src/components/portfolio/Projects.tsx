import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, FileText } from "lucide-react";
import capstoneBellabeat from "@/assets/capstone-bellabeat.png";
import capstoneCyclistic from "@/assets/capstone-cyclistic.png";

const projects = [
  {
    title: "Capstone – Google Data Analytics",
    description:
      "Análisis de datos de uso de dispositivos inteligentes para identificar patrones de comportamiento y generar información de marketing para la empresa de bienestar Bellabeat. El proyecto incluye la limpieza de datos, el análisis exploratorio y la visualización de datos para respaldar recomendaciones estratégicas.",
    tags: ["R", "Data Cleaning", "EDA", "Data Visualization"],
    status: "completed" as const,
    image: capstoneBellabeat,
    deliverableUrl: "#",
    markdownUrl: "#",
  },
  {
    title: "Capstone – Google Project Management",
    description:
      "Proyecto de gestión aplicando metodologías ágiles y herramientas de planificación. Documentación completa del ciclo de vida del proyecto.",
    tags: ["Agile", "Scrum", "Project Charter", "Stakeholders"],
    status: "in-progress" as const,
    image: capstoneCyclistic,
    deliverableUrl: "#",
    markdownUrl: "#",
  },
  {
    title: "Análisis de Datos en Bioinvestigación",
    description:
      "Proyecto personal integrando datos de investigación biomédica con herramientas de analytics modernas para generar insights accionables.",
    tags: ["Python", "SQL", "Data Viz", "Biodata"],
    status: "planned" as const,
    image: "/placeholder.svg",
  },
];

const statusLabel = {
  completed: { text: "Completado", class: "bg-primary/15 text-primary" },
  "in-progress": { text: "En curso", class: "bg-primary/10 text-primary" },
  planned: { text: "Próximamente", class: "bg-section-foreground/10 text-section-foreground/60" },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Portfolio</p>
          <div className="glow-line w-16 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-section-foreground">Proyectos</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden flex flex-col bg-section border border-section-foreground/10 hover:border-primary/30 transition-colors group shadow-sm"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden bg-section-foreground/10">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${p.image === capstoneBellabeat ? 'object-contain' : 'object-cover'}`}
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusLabel[p.status].class}`}>
                    {statusLabel[p.status].text}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-section-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-section-foreground/60 leading-relaxed mb-5 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-section-foreground/8 text-section-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(p.deliverableUrl || p.markdownUrl) && (
                  <div className="flex gap-3 pt-4 border-t border-section-foreground/10">
                    {p.deliverableUrl && (
                      <a
                        href={p.deliverableUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-section-foreground/50 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                        Ver caso de estudio
                      </a>
                    )}
                    {p.markdownUrl && (
                      <a
                        href={p.markdownUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-section-foreground/50 hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                        Ver código (GitHub)
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
