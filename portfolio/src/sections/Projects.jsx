import { projects } from "../utils/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 bg-gradient-primary bg-clip-text text-transparent inline-block">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-3xl bg-white border border-[#fee6cc] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-[#fee6cc] text-[#ac573f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#ac573f] hover:underline"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:underline"
                >
                  GitHub <FaGithub className="text-sm" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
