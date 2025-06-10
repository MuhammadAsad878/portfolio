import { Code, Database, Server, Globe } from 'lucide-react';
import { skills } from '@/data/Skills';

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
            <div className={`text-${skillCategory.color}-600 mb-4`}>
              {skillCategory.icon === 'Code' && <Code size={32} />}
              {skillCategory.icon === 'Globe' && <Globe size={32} />}
              {skillCategory.icon === 'Database' && <Database size={32} />}
              {skillCategory.icon === 'Server' && <Server size={32} />}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{skillCategory.title}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <span key={skillIndex} className={`bg-${skillCategory.color}-50 text-${skillCategory.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;