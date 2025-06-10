import { Code, Database, Server, Globe } from 'lucide-react';




const Skills = () => (
<section id="skills" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Programming Languages */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-blue-600 mb-4">
          <Code size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "C#", "JavaScript (ES6+)"].map((skill, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-green-600 mb-4">
          <Globe size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Frameworks & Libraries</h3>
        <div className="flex flex-wrap gap-2">
          {["Reactjs","Next.js", "Node.js", "Express.js", "Django", ".Net Winforms", "Passport.js"].map((skill, index) => (
            <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-purple-600 mb-4">
          <Database size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Databases</h3>
        <div className="flex flex-wrap gap-2">
          {["MongoDB", "MSSQL", "MySQL"].map((skill, index) => (
            <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-orange-600 mb-4">
          <Server size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Git & GitHub", "Postman", "Hopscotch", "Docker", "VS Code", 
            "Visual Studio", "Redis", "IntelliJ", "CI/CD Basics"
          ].map((skill, index) => (
            <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Others */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-pink-600 mb-4">
          <Code size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "RESTful APIs","GraphQL API's","Redis", "JWT", "Socket.io", "MVC", 
            "OOP", "Agile Practices"
          ].map((skill, index) => (
            <span key={index} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

);

export default Skills;