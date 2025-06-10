import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, Code, Database, Server, Globe } from 'lucide-react';


const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Full-Stack Developer with a Passion for Learning & Innovation</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a self-driven Full-Stack Web Developer with expertise in Node.js, Express.js, React.js, 
            MongoDB, Python & Django specializing in scalable web applications, backend optimization, with fundamental understanding of cloud-based technologies.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With a passion for building high-performance, user-centric applications, I focus on delivering 
            clean, efficient, and maintainable code using modern technologies. Currently pursuing my final 
            year of BSCS at The Islamia University of Bahawalpur.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <Code className="text-blue-600 mb-2" size={24} />
              <h4 className="font-semibold text-gray-900">Clean Code</h4>
              <p className="text-sm text-gray-600">Writing maintainable and efficient code</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <Database className="text-green-600 mb-2" size={24} />
              <h4 className="font-semibold text-gray-900">Database Design</h4>
              <p className="text-sm text-gray-600">Efficient CRUD Operations and database designs</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <Server className="text-purple-600 mb-2" size={24} />
              <h4 className="font-semibold text-gray-900">Backend Architecture</h4>
              <p className="text-sm text-gray-600">Scalable and secure server solutions</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <Globe className="text-orange-600 mb-2" size={24} />
              <h4 className="font-semibold text-gray-900">Fundamentals of Cloud Deployment</h4>
              <p className="text-sm text-gray-600">CI/CD, Docker, Kubernetes etc</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-700">Lahore, Punjab, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={20} />
              <span className="text-gray-700">muhammadasad4041@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={20} />
              <span className="text-gray-700">+92 313 6460591</span>
            </div>
          </div>
          
          <div className="mt-8">
            <h5 className="font-semibold text-gray-900 mb-4">Certifications</h5>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h6 className="font-medium text-gray-900">IBM Full-Stack JavaScript Developer</h6>
              <p className="text-sm text-gray-600">Professional Certificate • Feb 2025</p>
              <p className="text-xs text-gray-500 mt-1">
                12-course specialization covering MERN stack, DevOps, and cloud technologies
              </p>
              <a
                href="https://coursera.org/share/e1320253480447226141599a0f35eeef"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-blue-600 hover:underline font-semibold"
              >
                Verify Certification →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;