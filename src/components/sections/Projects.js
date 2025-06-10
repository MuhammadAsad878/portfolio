import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/Projects';

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200">
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <Image
                src={`/${project.image}`}
                width={300}
                height={200}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-1">
                      <span className="text-blue-600 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;